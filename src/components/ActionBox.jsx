import React from "react";

export default function ActionBox({
  isPaused,
  handlePause,
  handleReset,
  handleResume,
}) {
  return (
    <div className="action-box">
      {!isPaused ? (
        <button className="timer-button" onClick={handlePause}>
          Pause
        </button>
      ) : (
        <button className="timer-button" onClick={handleResume}>
          Resume
        </button>
      )}

      <button className="timer-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
