import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "../TimePicker";

const AppointmentBox = () => {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date)
  };
  
  return (
    <div className="appointment-container">
      <div className="header">Make your next appointment</div>
      <div className="content">
        <DatePicker
          selected={date}
          onChange={onChange}
          inline/>
        <TimePicker />
      </div>
      <button className="blue-btn">Next</button>
      
    </div>
  );
}

export default AppointmentBox;
