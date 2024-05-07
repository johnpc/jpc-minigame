import { MemoryGame } from "../";
import { Riddle } from "../lib/Components/Riddle";
import { Wordle } from "../lib/Components/Wordle";

function App() {
  return (
    <>
      <Riddle
        config={{
          onLose: () => {
            console.log("lose");
          },
          onWin: () => {
            console.log("win");
          },
          name: "riddle",
          riddle: `
        I can't be saved,
        Though people try.
        When fun is had,
        They say I fly.
        They say I'm money:
        I can be spent,
        I can be wasted,
        But never lent.
        `,
          answer: "time",
        }}
      />
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
