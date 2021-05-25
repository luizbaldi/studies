import React from "react";

const Eyes = ({ eyeRadius }) => {
  return (
    <>
      <circle cx="-100" cy="-100" r={eyeRadius} />
      <circle cx="100" cy="-100" r={eyeRadius} />
    </>
  );
};

export default Eyes;
