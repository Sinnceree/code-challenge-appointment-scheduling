import React from "react";

interface AppointmentFormProps {
  name: string;
  error: string | null;
  phoneNumber: string;
  description: string;
  setName: (val: string) => void;
  setPhoneNumber: (val: string) => void;
  setDescription: (val: string) => void;
}

const AppointmentForm = (props: AppointmentFormProps) => {
  return (
    <div className="content">
      <form className="appointment-info">
        <label>Fullname</label>
        <input placeholder="Enter Fullname" type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} />
        <label>Phone Number</label>
        <input placeholder="Enter Phonenumber" type="text" value={props.phoneNumber} onChange={(e) => props.setPhoneNumber(e.target.value)} />
        <label>Description</label>
        <textarea placeholder="Brief description for appointment" value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
      </form>
      {props.error && <p className="error-text">{props.error}</p> }
    </div>
  );
}

export default AppointmentForm;
