import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "../TimePicker";

const AppointmentBox = () => {
  const [date, setDate] = useState(new Date());
  const onChangeDate = date => setDate(date);

  const [time, setTime] = useState<string | null>(null);
  
  
  return (
    <div className="appointment-container">
      <div className="header">Make your next appointment</div>
      <div className="content">
        <DatePicker
          selected={date}
          onChange={onChangeDate}
          inline/>
        <TimePicker selected={time} onChange={setTime} />
      </div>

      <div className="buttons">
        <button className="blue-btn">Next</button>
      </div>

    </div>
  );
}

export default AppointmentBox;
