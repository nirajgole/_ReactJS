import React, { useState } from "react";

function HooksCounter() {
  //use Hooks on top level only
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Hooks Count :{count}</button>
    </div>
  );
}

export default HooksCounter;
