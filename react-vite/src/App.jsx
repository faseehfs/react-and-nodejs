import { useState } from "react";
import "./App.css";


function MyButton() {
  return (
    <button>
      I'm not Functional
    </button>
  );
}


function CountButton() {
  const [count, setCount] = useState(0);

  // useState(val) returns and array of two items:
  //   1. The current state value.
  //   2. A function that updates that value.

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} Times
    </button>
  );
}


export default function App() {
  return (
    <>
      <h1>Hello World!</h1>
        <MyButton />
      <h1>Counters that update separately</h1>
      <div className="button-group">
        <CountButton />
        <CountButton />
      </div>
    </>
  )
}