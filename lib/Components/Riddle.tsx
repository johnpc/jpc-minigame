"use client";

import { ChangeEvent, useState } from "react";
import { RiddleConfig } from "../types";

export const Riddle = (props: { config: RiddleConfig }) => {
  const [guess, setGuess] = useState<string>("");
  const handleKeyDown = (event: ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };
  const handleGuess = () => {
    if (guess.toLowerCase() === props.config.answer.toLowerCase()) {
      props.config.onWin();
    } else {
      props.config.onLose();
    }
  };
  return (
    <>
      <pre>{props.config.riddle}</pre>
      <input value={guess} onChange={handleKeyDown} />
      <button onClick={handleGuess}>Guess!</button>
    </>
  );
};
