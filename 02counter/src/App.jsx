import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const incCount = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log("clicked", counter);
    }
  };

  const decCount = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  const resetCount = () => {
    counter = 0;
    setCounter(counter);
  };

  return (
    <>
      <h1>Conter Project</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={incCount}>Increase count</button>
      <br />
      <button onClick={decCount}>Decrease count</button>
      <br />
      <button onClick={resetCount}>Reset count</button>
    </>
  );
}

export default App;
