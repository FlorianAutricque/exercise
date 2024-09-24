function TicTacToe() {
  return (
    <div>
      <h1>Tic Tac Toe game</h1>

      <div className="mainContainerGame">
        <div className="containerGame">
          <div className="row1">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="row2">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="row3">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>

        <button className="reset">Reset</button>
      </div>
    </div>
  );
}

export default TicTacToe;
