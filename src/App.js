import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./component/ClassCounter";
import DataFetching from "./component/DataFetching";
import ClassComponent from "./component/Experiment/ClassComponent";
import HooksCounter from "./component/HooksCounter";
import HooksCounterTwo from "./component/HooksCounterTwo";
import HooksMouseEvent from "./component/HooksMouseEvent";
import HooksObjects from "./component/HooksObjects";
import HooksUseEffect from "./component/HooksUseEffect";
import IntervalHookCounter from "./component/IntervalHookCounter";
import MouseContainer from "./component/MouseContainer";
import ComponentFirst from "./component/reducer/ComponentFirst";
import ComponentSecond from "./component/reducer/ComponentSecond";
import ReducerHooks from "./component/ReducerHooks";

export const CounterContext = React.createContext();

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

function App() {
  //required context for ComponentA and ComponentB
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CounterContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div className="App">
          <p>Hello React</p>
          {/* <ClassCounter />
      <HooksCounter />
      <HooksCounterTwo />
      <HooksObjects />
      <HooksUseEffect />
      <HooksMouseEvent />
      <MouseContainer /> */}
          {/* <IntervalHookCounter /> */}
          {/* <DataFetching /> */}
          {/* <ReducerHooks /> */}
          <ClassComponent />
        </div>
        <div>
          Count: {count}
          <ComponentFirst />
          <ComponentSecond />
        </div>
      </CounterContext.Provider>
    </>
  );
}

export default App;
