import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    //either remove dependency array or add input to array to update for or (here) write logic in function
  }, []);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
