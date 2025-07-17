import { useState } from "react";
import "./App.css";

function App() {
  const [diceNumber, setDiceNumber] = useState([1, 1]);

  const randomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <>
      <main>
        <div>
          <img src={`./dice-${diceNumber[0]}.png `} />
          <img src={`./dice-${diceNumber[1]}.png`} />
        </div>
        <button
          onClick={() => setDiceNumber([randomNum(1, 6), randomNum(1, 6)])}
        >
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
