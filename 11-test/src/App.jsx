import { useState } from "react";
import "./App.css";

function App() {
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    "000",
  ];
  const operatorsSigns = ["+", "-", "/", "*"];

  const [value, setValue] = useState("");
  const [operator, setOperator] = useState("");
  const [total, setTotal] = useState(0);

  //switching operators
  const calculation = value => {
    switch (operator) {
      case "+":
        setTotal(prev => prev + value);
        break;
      case "-":
        setTotal(prev => prev - value);
        break;
      case "/":
        setTotal(prev => prev / value);
        break;
      case "*":
        setTotal(prev => prev * value);
        break;

      default:
        setTotal(value);
    }
  };

  const deleteAll = () => {
    setValue("");
    setTotal(0);
  };

  const back = () => {
    setValue(value.slice(0, -1));
  };

  // this get the number that is clicked and add as many number that we click
  const handleNumberClicked = num => {
    setValue(prev => prev + num);
  };

  //same as above but we add the switch and once we click on the operator signs we reset the value to ''
  const handleOperatorClicked = op => {
    if (value) {
      calculation(Number(value));
      setValue("");
    }
    setOperator(op);
  };

  const handleCalculate = () => {
    if (value) {
      calculation(Number(value));
    }
    setOperator("");
    setValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-[20rem] mt-10">
      <div className="flex flex-col gap-2 w-full mb-2">
        <div className="border p-4 w-full flex justify-between">
          <p>Total:</p>
          <p>{total}</p>
        </div>
        <div className="border p-4 w-full flex justify-between">
          <p>Value:</p>
          <p>{value}</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full gap-2">
        <div className="grid grid-cols-3 gap-2 w-full">
          {numbers.map((number, index) => (
            <button
              value={value}
              onClick={() => handleNumberClicked(number)}
              key={index}
              className="border p-4 hover:bg-slate-500 flex items-center justify-center"
            >
              {number}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-full">
          {operatorsSigns.map((operatorsSign, index) => (
            <button
              value={operator}
              onClick={() => handleOperatorClicked(operatorsSign)}
              key={index}
              className="border p-4 hover:bg-slate-500"
            >
              {operatorsSign}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center gap-2">
        <button
          onClick={back}
          className="border p-4 hover:bg-slate-500 mt-2 w-full"
        >
          &larr;
        </button>
        <button
          onClick={deleteAll}
          className="border p-4 hover:bg-slate-500 mt-2 w-full"
        >
          DEL
        </button>
        <button
          onClick={handleCalculate}
          className="border p-4 hover:bg-slate-500 mt-2 w-full"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
