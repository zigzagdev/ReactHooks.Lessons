import React from 'react'
import './App.css';
import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterFive from "./components/HookCounterFive";
import HookCounterSix from "./components/HookCounterSix";

function App() {
  return (
    <div className="App">
      {/*<ClassCounter/>*/}
      {/*<HookCounter/>*/}
      {/*<HookCounterThree/>*/}
      {/*<HookCounterFour/>*/}
      <HookCounterFive/>
      {/* <HookCounterSix/>*/}
    </div>
  );
}

export default App;
