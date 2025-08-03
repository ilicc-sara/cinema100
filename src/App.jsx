import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

// // Store
// interface CounterState {
//   value: number;
// }
// interface UserState {
//   isSignedIn: boolean;
// }

// // Actions
// const incrementByAmount = { type: "INCREMENT", payload: 10 };
// const decrement = { type: "DECREMENT", payload: 1 };

// // Reducers

function App() {
  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
      <Counter />
    </div>
  );
}

export default App;
