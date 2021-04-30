import React, { useEffect, useState } from "react";
import { getAllUsers, UserData } from "../../sdk";
import "./index.scss";

const LandingPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  // Fetch list of users from cloud function
  const fetchUsers = async () => {
    const users = await getAllUsers();
    setUsers(users);
  }

  // Used to trigger fetching users function to update state
  useEffect(() => {
    fetchUsers()
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
              <button className="blue-btn">Schedule Appointment</button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default LandingPage;
