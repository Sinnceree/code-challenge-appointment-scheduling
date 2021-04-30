import React, { useEffect, useState } from "react";
import { getAllUsers, UserData } from "../../sdk";
import { useHistory } from "react-router-dom";

import "./index.scss";

const LandingPage = () => {
  const history = useHistory();
  const [users, setUsers] = useState<UserData[]>([]);

  // Fetch list of users from cloud function
  const fetchUsers = async () => {
    const users = await getAllUsers();
    setUsers(users);
  }

  const handleScheduleAppointment = (id: string) => {
    history.push(`/schedule/${id}`);
  }

  // Used to trigger fetching users function to update state
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="landing-page">
      List of all users

      <div className="users-list">
        {users && users.map((user) => (
          <div className="user">
            <img className="avatar" src={user.avatar} alt="user-avatar" />
            <h1 className="name">{user.name}</h1>
            <div className="actions">
              <button className="blue-btn">View Appointments</button>
              <button className="blue-btn" onClick={() => handleScheduleAppointment(user.uuid)}>Schedule Appointment</button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default LandingPage;
