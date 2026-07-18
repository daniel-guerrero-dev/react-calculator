import "./App.css";
import Display from "./Display";
import ButtonGrid from "./Buttons";
import { useState } from "react";

function App() {
  const [displayState, updateDisplayState] = useState("");
  const [memoryState, updateMemory] = useState("");
  const [pendingOperator, operatorState] = useState("");

  function buttonClick(text, operator) {
    if (operator === undefined && text != "CE") {
      updateDisplayState((displayState) => displayState + text);
    } else {
      switch (operator) {
        case "+":
          updateMemory(displayState);
          operatorState(operator);
          updateDisplayState("");
          break;
        case "-":
          updateMemory(displayState);
          operatorState(operator);
          updateDisplayState("");
          break;
        case "/":
          updateMemory(displayState);
          operatorState(operator);
          updateDisplayState("");
          break;
        case "*":
          updateMemory(displayState);
          operatorState(operator);
          updateDisplayState("");
          break;
        case "=": {
          let result = memoryState + pendingOperator + displayState;
          updateDisplayState(eval(result));
          operatorState("");
          break;
        }
        case "CE":
          updateDisplayState("");
          updateMemory(displayState);
          operatorState("");
      }
    }
  }

  return (
    <div className="h-screen flex-col flex justify-center items-center gap-1">
      <Display currentDisplay={displayState} />
      <ButtonGrid buttonClick={buttonClick} />
    </div>
  );
}

export default App;
