import React from "react";
import { LuAlarmClock } from "react-icons/lu";

const AlarmTime = ({ hours, minutes }) => {
  return (
    <div>
      <p>
        <LuAlarmClock /> AlarmTime
      </p>
      {hours}:{minutes}
    </div>
  );
};

export default AlarmTime;
