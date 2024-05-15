import React from "react";

export default function StartInput({ handleInput, handleStart }) {
  return (
    <div className="input-container">
      <div className="input-box">
        <input placeholder="HH" id="hour" onChange={handleInput} />
        <input placeholder="MM" id="minut" onChange={handleInput} />
        <input placeholder="SS" id="second" onChange={handleInput} />
      </div>
      <button className="timer-button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
