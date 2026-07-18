function ButtonGrid() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">+</button>
      </div>
      <div className="flex gap-1">
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button">-</button>
      </div>
      <div className="flex gap-1">
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">/</button>
      </div>
      <div className="flex gap-1">
        <button className="button">0</button>
        <button className="button">CE</button>
        <button className="button">=</button>
        <button className="button">*</button>
      </div>
    </div>
  );
}

export default ButtonGrid;
