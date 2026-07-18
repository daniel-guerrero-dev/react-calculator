export function Button({ text, operator, clickHandler }) {
  return (
    <button className="button" onClick={() => clickHandler(text, operator)}>
      {text}
    </button>
  );
}
