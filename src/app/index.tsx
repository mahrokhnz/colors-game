import './index.css';
import React, {useState} from 'react';
import GameBoard from "./steps/game_board";
import StartStep from "src/app/steps/start_step";
import ModeStep from "src/app/steps/start_step";

//TODO: add level and lives
//TODO: what happen when wrong click
//TODO: add types instead of any
//TODO: prettier, eslint
//TODO: check github pages
//TODO: write document

let basicShade = 78
function ColorsGame() {
    const [level, setLevel] = useState<number>(0)
    const [lives, setLives] = useState<number>(5)
    const [board, setBoard] = useState<Record<string, number>>({
        row: 3,
        column: 4,
    })
    const [boardMatrix, setBoardMatrix] = useState(null as any)

    const randomColorGenerator = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    }

    const paintGoal = (matrix, matrixColor: string) => {
        const rowIndex = Math.floor(Math.random() * matrix.length)
        const colIndex = Math.floor(Math.random() * matrix[rowIndex].length)

        matrix[rowIndex][colIndex] = {color: `${matrixColor}${basicShade + level}`, type: 'goal'}
    }

    const matrixGenerator = (boardMatrix = board) => {
        const matrixColor = randomColorGenerator()
        const matrix = Array(boardMatrix.row).fill({color: matrixColor, type: 'normal'}).map(() => Array(boardMatrix.column).fill({color: matrixColor, type: 'normal'}));

        paintGoal(matrix, matrixColor)

        setBoardMatrix(matrix)
    }

    const clickOnMatrixHandler = (type: string) => {
        if (type === 'goal' && level <= 21) {
            setLevel(level + 1)


            if (level%3 === 0) {
                setBoard({
                    row: board.row + 1,
                    column: board.column + 2
                })
            }

            matrixGenerator()
        } else if (lives > 0) {
            setLives(lives - 1)
        }
    }

    const clickOnButtonHandler = () => {
        setLevel(1)
        setLives(5)

        setBoard({
            row: 3,
            column: 4
        })

        matrixGenerator({
            row: 3,
            column: 4
        })
    }

  return (
    <main className="colorsGame">
        {lives > 0 && level > 0 && level < 22 ? (
            <GameBoard matrix={boardMatrix} board={board} onClickHandler={clickOnMatrixHandler} />
        ) : (
            <ModeStep mode={lives === 0 ? 'over' : level === 0 ? 'start' : 'end'} onClickHandler={clickOnButtonHandler}/>
        )}
    </main>
  );
}

export default ColorsGame;
