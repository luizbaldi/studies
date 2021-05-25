import React from "react";

const BackgroundCircle = ({ centerY, strokeWidth }) => {
  return (
    <circle
      r={centerY - strokeWidth / 2}
      fill="yellow"
      stroke="black"
      strokeWidth={strokeWidth}
    />
  );
};

export default BackgroundCircle;
