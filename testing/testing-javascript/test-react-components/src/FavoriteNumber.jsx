import React, { useState } from "react";

const FavoriteNumber = ({ min = 1, max = 9 }) => {
  const [number, setNumber] = useState(1);

  const onNumberChange = (e) => {
    const value = Number(e.target.value);
    setNumber(value);
  };

  const isValid = number <= max && number >= min;

  return (
    <div>
      <label htmlFor="number">Favorite number</label>
      <input type="text" id="number" value={number} onChange={onNumberChange} />
      {!isValid && <span>Number is invalid</span>}
    </div>
  );
};

export default FavoriteNumber;
