import React, { useState } from "react";
import "./App.css";

function App() {
  const [blown, setBlown] = useState(false);

  const blowCandles = () => {
    setBlown(true);
    alert("🎉 The candles are blown out! Happy Birthday 🎉");
  };

  return (
    <div className="container">
      <h1>🎂 Happy Birthday, My Friend! 🎂</h1>

      <div className="cake">
        <div className="candles">
          <div className={`candle ${blown ? "out" : ""}`}></div>
          <div className={`candle ${blown ? "out" : ""}`}></div>
          <div className={`candle ${blown ? "out" : ""}`}></div>
        </div>
        <div className="cake-body"></div>
      </div>

      <button onClick={blowCandles}>
        Blow the Candles 🎤💨
      </button>
    </div>
  );
}

export default App;
