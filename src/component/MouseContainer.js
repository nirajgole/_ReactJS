import React, { useState } from "react";
import HooksMouseEvent from "./HooksMouseEvent";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HooksMouseEvent />}
    </div>
  );
}

export default MouseContainer;
