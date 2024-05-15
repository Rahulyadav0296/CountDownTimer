import React from "react";

export default function TimerBox({ hour, minut, second }) {
  return (
    <div className="timer-box">
      <div>{hour < 10 ? `0${hour}` : hour}</div>
      <span>:</span>
      <div>{minut < 10 ? `0${minut}` : minut}</div>
      <span>:</span>
      <div>{second < 10 ? `0${second}` : second}</div>
    </div>
  );
}
