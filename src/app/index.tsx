import "./index.css";
import React, { useState } from "react";
import GameBoard from "./steps/game_board";
import ModeStep from "src/app/steps/start_step";

let basicShade = 78;
function ColorsGame() {
  const [level, setLevel] = useState<number>(0);
  const [lives, setLives] = useState<number>(5);
  const [board, setBoard] = useState<Record<string, number>>({
    row: 3,
    column: 4,
  });
  const [boardMatrix, setBoardMatrix] = useState(null);

  const randomColorGenerator = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  };

  const paintGoal = (matrix, matrixColor: string, startLevel) => {
    const rowIndex = Math.floor(Math.random() * matrix.length);
    const colIndex = Math.floor(Math.random() * matrix[rowIndex].length);

    matrix[rowIndex][colIndex] = {
      color: `${matrixColor}${basicShade + startLevel + 1}`,
      type: "goal",
    };
  };

  const matrixGenerator = (boardMatrix = board, startLevel = level) => {
    const matrixColor = randomColorGenerator();
    const matrix = Array(boardMatrix.row)
      .fill({ color: matrixColor, type: "normal" })
      .map(() =>
        Array(boardMatrix.column).fill({ color: matrixColor, type: "normal" }),
      );

    paintGoal(matrix, matrixColor, startLevel);

    setBoardMatrix(matrix);
  };

  const clickOnMatrixHandler = (type: string) => {
    if (type === "goal" && level <= 21) {
      setLevel(level + 1);

      if (level % 3 === 0) {
        setBoard({
          row: board.row + 1,
          column: board.column + 2,
        });
      }

      matrixGenerator();
    } else if (lives > 0) {
      setLives(lives - 1);
    }
  };

  const clickOnButtonHandler = () => {
    setLevel(1);
    setLives(5);

    setBoard({
      row: 3,
      column: 4,
    });

    matrixGenerator(
      {
        row: 3,
        column: 4,
      },
      1,
    );
  };

  return (
    <main className="colorsGame">
      {lives > 0 && level > 0 && level < 22 ? (
        <>
          <div className="gameInfo">
            <span className="info">
              <b>Level:</b> {level}
            </span>
            <span className="info">
              <b>Lives:</b> {lives}
            </span>
          </div>
          <GameBoard
            matrix={boardMatrix}
            board={board}
            onClickHandler={clickOnMatrixHandler}
          />
        </>
      ) : (
        <ModeStep
          mode={lives === 0 ? "over" : level === 0 ? "start" : "end"}
          onClickHandler={clickOnButtonHandler}
        />
      )}
    </main>
  );
}

export default ColorsGame;
