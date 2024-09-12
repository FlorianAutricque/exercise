import { useState } from "react";

function App() {
  const [result, setResult] = useState(null);
  const [value, setValue] = useState("");
  const [op, setOp] = useState("");

  const operators = ["+", "-", "*", "/"];

  const handleNumber = num => {
    setValue(prev => prev + num);
  };

  const handleSlice = () => {
    setValue(value.slice(0, -1));
  };

  const handleDel = () => {
    setResult(null);
    setValue("");
    setOp("");
  };

  const calculation = numClicked => {
    switch (op) {
      case "+":
        setResult(prevNum => prevNum + numClicked);
        break;
      case "-":
        setResult(prevNum => prevNum - numClicked);
        break;
      case "*":
        setResult(prevNum => prevNum * numClicked);
        break;
      case "/":
        setResult(prevNum => prevNum / numClicked);
        break;
      default:
        setResult(numClicked);
    }
  };

  const handleOperator = operator => {
    if (value) {
      calculation(Number(value));
      setValue("");
    }
    setOp(operator);
  };

  const handleResult = () => {
    if (value) {
      calculation(Number(value));
    }
    setValue("");
    setOp("");
  };

  let numbers = [];
  for (let index = 0; index < 10; index++) {
    numbers.push(
      <button key={index} value={value} onClick={() => handleNumber(index)}>
        {index}
      </button>
    );
  }

  return (
    <div className="mainContainer">
      <div className="containerResult">{result}</div>
      <div className="containerResult">{value}</div>
      <div className="container">
        <div className="containerNumbers">{numbers}</div>

        <div className="containerOperators">
          {operators.map((operator, index) => (
            <button
              key={index}
              value={operator}
              onClick={() => handleOperator(operator)}
            >
              {operator}
            </button>
          ))}
        </div>
      </div>
      <div className="containerControl">
        <button onClick={handleDel}>DEL</button>
        <button onClick={handleSlice}>BACK</button>
        <button className="equals" onClick={handleResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
