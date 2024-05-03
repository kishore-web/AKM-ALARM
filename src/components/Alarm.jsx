import React, { useState } from "react";
import EditAlarm from "./EditAlarm";
import AlarmTime from "./AlarmTime";
import TimeLeft from "./TimeLeft";
import { getTimeLeft } from "../utils/util";

const Alarm = () => {
  const [visibleEditAlarm, setVisibleEditAlarm] = useState(false);
  const [alarmTime, setAlarmTime] = useState({
    hours: 0,
    minutes: 0,
  });
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
  });

  const startAlarm = (hours, minutes) => {
    console.log("start alarm received at alarm component");
    setAlarmTime({ hours: hours, minutes: minutes });
    //todo: calculate timeleft hours and minutes from current time
    console.log("hours:" + hours + ", minutes:" + minutes);
    const timeLeftTemp = getTimeLeft(hours, minutes);
    console.log(timeLeftTemp);
    setTimeLeft(timeLeftTemp);
    setVisibleEditAlarm(false);
  };
  return (
    <div className="mx-auto my-2 container border-4 p-2">
      <div className="flex justify-center items-center py-4">
        <button
          className="bg-green-600 p-3 rounded text-white cursor-pointer"
          onClick={() => {
            setVisibleEditAlarm(true);
            // alert("set alarm clicked");
          }}
        >
          Set Alarm
        </button>
      </div>
      <div className="flex justify-center items-center">
        {visibleEditAlarm && (
          <EditAlarm
            handleClose={() => {
              setVisibleEditAlarm(false);
            }}
            startAlarm={startAlarm}
          />
        )}
      </div>
      <div className="flex justify-center items-center">
        <div>
          <AlarmTime hours={alarmTime.hours} minutes={alarmTime.minutes} />
          <TimeLeft hours={timeLeft.hours} minutes={timeLeft.minutes} />
          <button className="p-2 border rounded text-white bg-red-500">
            Stop Alarm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alarm;
