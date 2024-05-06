import { MemoryGame } from "../";

function App() {
  return (
    <MemoryGame
      config={{
        name: "memory-game",
        timeLimitSeconds: 60,
        onWin: () => {
          console.log("win");
        },
        onLose: () => {
          console.log("lose");
        },
      }}
    />
  );
}

export default App;
