import React, { useEffect, useState } from "react";

function HooksMouseEvent() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    //effects
    console.log("Use effect called!");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      //cleanup code
      console.log("Unmount, removeEvent");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks - X{x}, Y{y}
    </div>
  );
}

export default HooksMouseEvent;
