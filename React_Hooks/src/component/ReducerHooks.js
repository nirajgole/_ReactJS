import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ReducerHooks() {
  const [count, dispatch] = useReducer(reducer, initialState);
  //same reducer can be used for multiple times
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        <p>Count: {countTwo}</p>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </>
  );
}

export default ReducerHooks;
