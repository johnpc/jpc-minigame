export type DefaultMinigameConfig = {
  name:
    | "memory-game"
    | "wordle"
    | "frogger"
    | "rock-paper-scissors"
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

export type MinigameConfig = MemoryGameConfig | WordleConfig;
