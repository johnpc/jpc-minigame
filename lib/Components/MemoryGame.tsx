"use client";

import { useEffect, useState } from "react";
import MemoryCardGame from "react-card-memory-game";
import { MemoryGameConfig } from "../types";

export const MemoryGame = (props: { config: MemoryGameConfig }) => {
  const [remainingTime, setRemainingTime] = useState(
    props.config.timeLimitSeconds,
  );
  useEffect(() => {
    const tickTimer = () => {
      if (remainingTime <= 0) {
        props.config.onLose();
      }
      setRemainingTime(remainingTime - 1);
    };
    const timeout = setTimeout(tickTimer, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [props.config, remainingTime]);

  return (
    <>
      <p>Memory Game: {remainingTime} seconds remaining.</p>
      <MemoryCardGame gridNumber={4} gameFinished={props.config.onWin} />
    </>
  );
};
