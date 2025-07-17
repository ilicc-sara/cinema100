import { useState } from "react";
import "./App.css";
import Image from "./Image";

function App() {
  const [diceNumber, setDiceNumber] = useState([1, 1]);

  const randomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <>
      <main>
        <div>
          <Image number={diceNumber[0]} />
          <Image number={diceNumber[1]} />
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
