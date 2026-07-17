import "./App.css";
import Display from "./Display";
import ButtonGrid from "./Buttons";

function App() {
  return (
    <div className="h-screen flex-col flex justify-center items-center">
      <Display />
      <ButtonGrid />
    </div>
  );
}

export default App;
