import "./App.css";
import { useState } from "react";

const messages = ["Step: ", "Count: "];

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date("July 4 2023");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  /* function handleStepPlus() {
    setStep((step) => step + 1);
    } 
    function handleStepMinus() {
    setStep((step) => step - 1);
  } */

  function handleCountPlus() {
    setCount((count) => count + step);
  }
  function handleCountMinus() {
    setCount((count) => count - step);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span className="message">
          {messages[0]} {step}
        </span>

        <p></p>
      </div>

      <button onClick={handleCountMinus}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={handleCountPlus}>+</button>

      <p>
        <span>
          {count} days from today is: {date.toDateString()}
        </span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>RESET</button>
        </div>
      ) : null}
    </div>
  );
}
