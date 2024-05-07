import { MemoryGame } from "../";
import { Wordle } from "../lib/Components/Wordle";

function App() {
  return (
    <>
      <Wordle
        word="pious"
        onComplete={(win: boolean) => console.log({ win })}
      />
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
    </>
  );
}

export default App;
