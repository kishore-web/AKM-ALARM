import React, { useState } from "react";
import Hours from "./Hours";
import Minutes from "./Minutes";
import Sound from "./Sound";
import { MdOutlineClose } from "react-icons/md";

const EditAlarm = ({ handleClose, startAlarm }) => {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
    console.log("new hour" + hour);
  };
  const handleMinuteChange = (minute) => {
    setSelectedMinute(minute);
    console.log("new minute" + minute);
  };
  return (
    <div className="border-2 rounded-lg w-2/4 p-3 space-y-3">
      <div className="flex justify-between bg-blue-500 text-white p-3">
        <h3>Edit Alarm</h3>
        <div
          className="cursor-pointer"
          onClick={() => {
            handleClose();
          }}
        >
          <MdOutlineClose />
        </div>
      </div>
      <div className="flex justify-between">
        <Hours handleAlarmHourChange={handleHourChange} />
        <Minutes handleAlarmMinuteChange={handleMinuteChange} />
      </div>
      <Sound />
      <div>
        <p>Title</p>
        <input
          type="text"
          placeholder="Alarm"
          className="outline-gray-400"
          name=""
          id=""
        />
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-2 border rounded">Test</button>
        <div>
          <button className="px-3 py-2 border rounded mr-2">Cancel</button>
          <button
            className="px-5 py-2 border rounded bg-green-500 text-white"
            onClick={() => {
              console.log("Start button clicked");
              console.log(
                "inside edit alarm" + selectedHour + ":" + selectedMinute
              );
              startAlarm(selectedHour, selectedMinute);
            }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAlarm;
