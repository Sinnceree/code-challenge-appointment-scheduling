import React from "react";
import "./index.scss"

const TimePicker = () => {
  const times = [
    // Column one
    ["7am-8am", "8am-9am", "9am-10am", "10am-11am", "11am-12pm"],
    // Column two
    ["12pm-1pm", "1pm-2pm", "2pm-3pm", "3pm-4pm", "4pm-5pm"],
    // Column three
    ["5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm", "9pm-10pm"],
  ]
  
  return (
    <div className="timepicker-box">
      <h1 className="selected-time">9am-10am</h1>
      <div className="times">
        {times.map((column: string[]) => (
          <div className="timepicker-column">
            {column.map((time: string) => (
              <div className="timepicker-block">{time}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimePicker;
