import React, { useState, useMemo } from "react";

export default function memo() {
  const [number, setNumber] = useState<number>(0);
  const [isRandom, setRandom] = useState<boolean>(false);

  // Generates a random number on every render
  const randomWithoutMemo: number = Math.random();

  // Generates a random number when isRandom state changes
  const randomNumber: number = useMemo(() => {
    console.log("=> Generating new random number with useMemo...");
    console.log("=> number in useMemo...", number);

    return Math.random();
  }, [isRandom]);

  console.log("=> Rendering App component with useMemo...");
  console.log("=> number...", number);
  console.log("=> randomWithoutMemo...", randomWithoutMemo);
  console.log("=> randomNumber useMemo...", randomNumber);

  return (
    <div>
      <div>
        <button onClick={() => setNumber(number - 1)}>down</button>
        <span>{number}</span>
        <button onClick={() => setNumber(number + 1)}>up</button>
      </div>
      <div>without useMemo: {randomWithoutMemo}</div>
      <div>useMemo: {randomNumber}</div>
      <button
        onClick={() => {
          setRandom(!isRandom);
        }}
      >
        random
      </button>
    </div>
  );
}
