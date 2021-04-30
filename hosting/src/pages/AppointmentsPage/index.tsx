import React, { useState, useEffect } from "react";
import { UserData, getUserByUUID, getAppointmentsByUUID, AppointmenObject, setAppointmentStatusById } from "../../sdk";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./index.scss";

const AppointmentsPage = () => {
  const history = useHistory();
  const { userId } = useParams()
  const [user, setUser] = useState<UserData | null>(null);
  const [appointments, setAppointments] = useState<AppointmenObject[]>([]);

  const checkIfValidUser = async () => {
    const userData = await getUserByUUID(userId);
    if (!userData) {
      history.push("/")
    }
    setUser(userData)
  }

  // Fetch all the appointments assigned to this UUID
  const getAppointments = async () => {
    const data = await getAppointmentsByUUID(userId);
    setAppointments(data)
  }

  const handleChangingStatus = async (id: string, accepted: boolean) => {
    const updated = await setAppointmentStatusById(id, accepted);
    if (updated) {
      getAppointments(); // If we successfully updated the appointment lets refetch the list of them to display
    }
  }

  // On mount of component lets check if the userId provided is a valid user
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    checkIfValidUser();
    if (userId) {
      getAppointments()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="appointment-page">
      {user?.name} Appointments

      <div className="appointments-list">

        {appointments && appointments.map((appointment, index: number) => (
          <div className="appointment" key={index}>
            <div className="status">
              {appointment.pending ? "Pending Response" : appointment.accepted ? "Accepted" : "Denied"}
            </div>
            <h1 className="name">Appointment with <span>{appointment.name}</span> on <span>{appointment.date}</span> between <span>{appointment.time}</span></h1>
            <div className="actions">
              <button className="blue-btn" onClick={() => handleChangingStatus(appointment.appointmentId, true)}>Accept</button>
              <button className="blue-btn deny" onClick={() => handleChangingStatus(appointment.appointmentId, false)}>Deny</button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default AppointmentsPage;
