import React, { useState } from "react";

function HooksCounterTwo() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementByFive = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementByFive}>Increment by 5</button>
    </div>
  );
}

export default HooksCounterTwo;
