import { useState, useCallback } from "react";

export default function callback() {
  const [number, setNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  const randomWithoutCallback = Math.random();

  const randomFunction = useCallback((number: number) => {
    console.log("=> Generating new random number with useCallback...");
    console.log("=> number in useCallback...", number);

    setRandomNumber(Math.random() * number);
  }, []);

  console.log("=> Rendering App component with useCallback...");
  console.log("=> number...", number);
  console.log("=> randomWithoutCallback...", randomWithoutCallback);
  console.log("=> randomNumber useCallback...", randomNumber);

  return (
    <div>
      <div>
        <button onClick={() => setNumber(number - 1)}>down</button>
        <span>{number}</span>
        <button onClick={() => setNumber(number + 1)}>up</button>
      </div>
      <div>without useCallback: {randomWithoutCallback}</div>
      <div>useCallback: {randomNumber}</div>
      <button
        onClick={() => {
          randomFunction(number);
        }}
      >
        random
      </button>
    </div>
  );
}