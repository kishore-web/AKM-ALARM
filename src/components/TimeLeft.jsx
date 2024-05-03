import React from "react";
import { BsClockHistory } from "react-icons/bs";

const TimeLeft = ({ hours, minutes }) => {
  return (
    <div>
      <BsClockHistory />
      <p>TimeLeft</p>
      <p>
        {hours}: {minutes}
      </p>
    </div>
  );
};

export default TimeLeft;
