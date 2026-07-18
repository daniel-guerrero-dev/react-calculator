import { Button } from "./Components/Button";
function ButtonGrid() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="+" operator="+" />
      </div>
      <div className="flex gap-1">
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" operator={"-"} />
      </div>
      <div className="flex gap-1">
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="/" operator="/" />
      </div>
      <div className="flex gap-1">
        <Button text="0" />
        <Button text="CE" />
        <Button text="*" operator="*" />
        <Button text="=" operator="=" />
      </div>
    </div>
  );
}

export default ButtonGrid;
