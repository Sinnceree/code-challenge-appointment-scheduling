import React, { useState, useEffect } from "react";
import { UserData, getUserByUUID } from "../../sdk";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./index.scss";

const AppointmentsPage = () => {
  const history = useHistory();
  const { userId } = useParams()
  const [user, setUser] = useState<UserData | null>(null);
  const [appointments, setAppointments] = useState([]);

  const checkIfValidUser = async () => {
    const userData = await getUserByUUID(userId);
    if (!userData) {
      history.push("/")
    }
    setUser(userData)
  }

  // On mount of component lets check if the userId provided is a valid user
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { checkIfValidUser() }, []);

  return (
    <div className="landing-page">
      {user?.name} Appointments

      {/* <div className="users-list">
        {users && users.map((user) => (
          <div className="user" key={user.uuid}>
            <img className="avatar" src={user.avatar} alt="user-avatar" />
            <h1 className="name">{user.name}</h1>
            <div className="actions">
              <button className="blue-btn" onClick={() => handleViewAppointment(user.uuid)}>View Appointments</button>
              <button className="blue-btn" onClick={() => handleScheduleAppointment(user.uuid)}>Schedule Appointment</button>
            </div>

          </div>
        ))}

      </div> */}
    </div>
  );
}

export default AppointmentsPage;
