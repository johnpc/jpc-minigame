export type DefaultMinigameConfig = {
  name:
    | "memory-game"
    | "wordle"
    | "frogger"
    | "rock-paper-scissors"
    | "riddle"
    | "whack-a-mole";
  onWin: () => void;
  onLose: () => void;
};

export type MemoryGameConfig = DefaultMinigameConfig & {
  name: "memory-game";
  timeLimitSeconds: number;
};

export type WordleConfig = DefaultMinigameConfig & {
  name: "wordle";
  word: string;
};

export type RiddleConfig = DefaultMinigameConfig & {
  name: "riddle";
  riddle: string;
  answer: string;
};

export type MinigameConfig = MemoryGameConfig | WordleConfig;
