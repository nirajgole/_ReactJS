import "./App.css";
import ClassCounter from "./component/ClassCounter";
import DataFetching from "./component/DataFetching";
import HooksCounter from "./component/HooksCounter";
import HooksCounterTwo from "./component/HooksCounterTwo";
import HooksMouseEvent from "./component/HooksMouseEvent";
import HooksObjects from "./component/HooksObjects";
import HooksUseEffect from "./component/HooksUseEffect";
import IntervalHookCounter from "./component/IntervalHookCounter";
import MouseContainer from "./component/MouseContainer";

function App() {
  return (
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
      <DataFetching />
    </div>
  );
}

export default App;
