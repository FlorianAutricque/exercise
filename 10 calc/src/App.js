import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState(0);
  const [operator, setOperator] = useState("");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const op = ["+", "-", "/", "*"];

  const handleNumber = num => {
    setValue(prev => prev + num);
  };

  const calculation = value => {
    switch (operator) {
      case "+":
        setTotal(prevTotal => prevTotal + value);
        break;
      case "-":
        setTotal(prevTotal => prevTotal - value);
        break;
      case "*":
        setTotal(prevTotal => prevTotal * value);
        break;
      case "/":
        setTotal(prevTotal => prevTotal / value);
        break;
      default:
        setTotal(value);
    }
  };

  const handleOperator = operatorSign => {
    if (value) {
      calculation(Number(value));
      setValue("");
    }
    setOperator(operatorSign);
  };

  const handleEquals = () => {
    if (value) {
      calculation(Number(value));
    }
  };

  const handleClear = () => {
    setValue("");
    setTotal(0);
  };

  const handleBack = () => {
    setValue(value.slice(0, -1));
  };

  return (
    <div>
      <div className="container">
        <div className="containerNumber">
          {numbers.map(num => (
            <button value={value} onClick={() => handleNumber(num)}>
              {num}
            </button>
          ))}
        </div>

        <div className="containerOperators">
          {op.map(operatorSign => (
            <button
              value={operator}
              onClick={() => handleOperator(operatorSign)}
            >
              {operatorSign}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleEquals}>=</button>
      <button onClick={handleClear}>DEL</button>
      <button onClick={handleBack}>BACK</button>
      <p>value: {value}</p>
      <p>Results: {total}</p>
      <p>op: {operator}</p>
    </div>
  );
}

export default App;
