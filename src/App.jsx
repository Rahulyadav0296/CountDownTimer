import { useEffect, useState } from "react";
import Header from "./components/Header";
import StartInput from "./components/StartInput";
import TimerBox from "./components/TimerBox";
import ActionBox from "./components/ActionBox";

function App() {
  const [hour, setHour] = useState(0);
  const [minut, setMinut] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timerId, setTimerId] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const resetTimer = () => {
    setHour(0);
    setMinut(0);
    setSecond(0);
  };
  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSecond((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinut((m) => m - 1);
      setSecond(59);
    } else if (min === 0) {
      setHour((h) => h - 1);
      setMinut(59);
      setSecond(59);
    }
    if (hr === 0 && min === 0 && sec === 0) {
      resetTimer();
      clearInterval(tid);
      alert("Timer is Finished");
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(second, minut, hour, tid);
      }, 1000);

      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hour, minut, second]);

  const handleStart = () => {
    if (hour < 0 || minut < 0 || second < 0) {
      alert("Invalid Input");
      return;
    } else {
      setIsStart(true);
    }
  };

  const handleReset = () => {
    setIsStart(false);
    resetTimer();
    clearInterval(timerId);
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(second, minut, hour);
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hour") {
      setHour(value);
    } else if (id === "minut") {
      setMinut(value);
    } else {
      setSecond(value);
    }
  };

  return (
    <>
      <div className="App">
        <Header />
        {!isStart ? (
          <StartInput handleInput={handleInput} handleStart={handleStart} />
        ) : (
          <div className="show-container">
            <TimerBox hour={hour} minut={minut} second={second} />
            <ActionBox
              isPaused={isPaused}
              handlePause={handlePause}
              handleReset={handleReset}
              handleResume={handleResume}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
