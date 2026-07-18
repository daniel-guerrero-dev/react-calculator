import { Button } from "./Components/Button";
function ButtonGrid({ buttonClick }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <Button text="7" clickHandler={buttonClick} />
        <Button text="8" clickHandler={buttonClick} />
        <Button text="9" clickHandler={buttonClick} />
        <Button text="+" operator="+" clickHandler={buttonClick} />
      </div>
      <div className="flex gap-1">
        <Button text="4" clickHandler={buttonClick} />
        <Button text="5" clickHandler={buttonClick} />
        <Button text="6" clickHandler={buttonClick} />
        <Button text="-" operator={"-"} clickHandler={buttonClick} />
      </div>
      <div className="flex gap-1">
        <Button text="1" clickHandler={buttonClick} />
        <Button text="2" clickHandler={buttonClick} />
        <Button text="3" clickHandler={buttonClick} />
        <Button text="/" operator="/" clickHandler={buttonClick} />
      </div>
      <div className="flex gap-1">
        <Button text="0" clickHandler={buttonClick} />
        <Button text="CE" operator="CE" clickHandler={buttonClick} />
        <Button text="*" operator="*" clickHandler={buttonClick} />
        <Button text="=" operator="=" clickHandler={buttonClick} />
      </div>
    </div>
  );
}

export default ButtonGrid;
