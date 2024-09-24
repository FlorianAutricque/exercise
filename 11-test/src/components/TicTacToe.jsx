import { useState } from "react";

function TicTacToe() {
  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState("X");
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleClick = num => {
    const newData = [...data];
    newData[num] = count % 2 === 0 ? "X" : "O";
    count % 2 === 0 ? setPlayer("O") : setPlayer("X");

    setData(newData);
    setCount(count + 1);
  };

  const calculateWinner = () => {
    const combs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < combs.length; index++) {
      const [a, b, c] = combs[index];
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(data);
  let status;
  if (winner) {
    status = "Winner is: " + winner;
  }

  const reset = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
  };

  return (
    <div>
      <h1>Tic Tac Toe game</h1>

      <div className="mainContainerGame">
        {!winner ? (
          <p>
            Player: <span>{player}</span>&apos;s turn
          </p>
        ) : (
          <p>Press Reset below to start over</p>
        )}

        <p>{status}</p>
        <div className="containerGame">
          <div className="row1">
            <button
              disabled={data[0] !== ""}
              className="box"
              onClick={() => handleClick(0)}
            >
              {data[0]}
            </button>
            <button
              disabled={data[1] !== ""}
              className="box"
              onClick={() => handleClick(1)}
            >
              {data[1]}
            </button>
            <button
              disabled={data[2] !== ""}
              className="box"
              onClick={() => handleClick(2)}
            >
              {data[2]}
            </button>
          </div>
          <div className="row2">
            <button
              disabled={data[3] !== ""}
              className="box"
              onClick={() => handleClick(3)}
            >
              {data[3]}
            </button>
            <button
              disabled={data[4] !== ""}
              className="box"
              onClick={() => handleClick(4)}
            >
              {data[4]}
            </button>
            <button
              disabled={data[5] !== ""}
              className="box"
              onClick={() => handleClick(5)}
            >
              {data[5]}
            </button>
          </div>
          <div className="row3">
            <button
              disabled={data[6] !== ""}
              className="box"
              onClick={() => handleClick(6)}
            >
              {data[6]}
            </button>
            <button
              disabled={data[7] !== ""}
              className="box"
              onClick={() => handleClick(7)}
            >
              {data[7]}
            </button>
            <button
              disabled={data[8] !== ""}
              className="box"
              onClick={() => handleClick(8)}
            >
              {data[8]}
            </button>
          </div>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
