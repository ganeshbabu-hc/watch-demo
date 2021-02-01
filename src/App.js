import React from "react";
import "./styles.css";

const Clock = () => {
  const [timer, setTimer] = React.useState();

  const dateString = React.useMemo(() => {
    console.log("called callback");
    let Days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let date = new Date();
    return `${date.toLocaleDateString()} | ${Days[date.getDay()]}`;
  }, []);

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      let date = new Date();
      setTimer(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="clock">
      <div className="clock__belt">
        <div className="clock__face-0"></div>
        <div className="clock__face-1"></div>
        <div className="clock__face">
          <span className="clock__face-time">{timer}</span>
          <span className="clock__face-date">{dateString}</span>
          <div className="clock__key"></div>
          <div className="clock__key-1"></div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}
