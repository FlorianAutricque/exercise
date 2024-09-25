import { useState } from "react";

function App() {
  const [value, setValue] = useState(10);

  const handleInput = e => {
    if (value >= 100) {
      return;
    }
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(10);
  };

  return (
    <div className="container">
      <h1>Progress bar</h1>

      <div className="progressBar">
        <div
          className="bg-red-300 rounded-[25px] text-center"
          style={{ width: `${value}%` }}
        >
          {value || 0}
        </div>
      </div>

      <div className="input">
        <p>Input Percentage:</p>
        <input type="number" value={value} onChange={e => handleInput(e)} />
      </div>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
