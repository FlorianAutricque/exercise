import { useState } from "react";

function TicTacToe() {
  // const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [data, setData] = useState(new Array(9).fill(""));

  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState("X");

  const handleClick = num => {
    const newData = [...data];
    newData[num] = count % 2 === 0 ? "X" : "O";

    count % 2 === 0 ? setPlayer("O") : setPlayer("X");
    setCount(count + 1);
    setData(newData);
  };

  const calculateWinner = data => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return null;
  };

  const reset = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
  };

  let winner;
  winner = calculateWinner(data);

  const [x, setX] = useState([0, 1, 2]);

  return (
    <div>
      <div className="mainContainerGame">
        <h1>Tic Tac Toe Game</h1>

        {!winner ? (
          <p>
            Turn: <span>{player}</span>&apos;s turn
          </p>
        ) : (
          ""
        )}

        {winner ? (
          <p>
            Congratulations to <span>{winner}</span>, you won the game!
          </p>
        ) : (
          ""
        )}

        <div className="containerGame">
          <div className="row1">
            {x.map((x, i) => (
              <button
                key={i}
                className="box"
                onClick={() => handleClick(x)}
                disabled={data[x] !== ""}
              >
                {data[x]}
              </button>
            ))}

            {/* <button
              className="box"
              onClick={() => handleClick(0)}
              disabled={data[0] !== ""}
            >
              {data[0]}
            </button>
            <button
              className="box"
              onClick={() => handleClick(1)}
              disabled={data[1] !== ""}
            >
              {data[1]}
            </button>
            <button
              className="box"
              onClick={() => handleClick(2)}
              disabled={data[2] !== ""}
            >
              {data[2]}
            </button> */}
          </div>
          <div className="row2">
            <button
              className="box"
              onClick={() => handleClick(3)}
              disabled={data[3] !== ""}
            >
              {data[3]}
            </button>
            <button
              className="box"
              onClick={() => handleClick(4)}
              disabled={data[4] !== ""}
            >
              {data[4]}
            </button>
            <button
              className="box"
              onClick={() => handleClick(5)}
              disabled={data[5] !== ""}
            >
              {data[5]}
            </button>
          </div>
          <div className="row3">
            <button
              className="box"
              onClick={() => handleClick(6)}
              disabled={data[6] !== ""}
            >
              {data[6]}
            </button>
            <button
              className="box"
              onClick={() => handleClick(7)}
              disabled={data[7] !== ""}
            >
              {data[7]}
            </button>
            <button
              className="box"
              onClick={() => handleClick(8)}
              disabled={data[8] !== ""}
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
