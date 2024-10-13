import './index.css';
import React, {useEffect, useState} from 'react';
import GameBoard from "../components";

//TODO: prettier, eslint
//TODO: add types instead of any
//TODO: check github pages

let basicShade = 78
function ColorsGame() {
    const [level, setLevel] = useState<number>(1)
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

    const matrixGenerator = () => {
        const matrixColor = randomColorGenerator()
        const matrix = Array(board.row).fill({color: matrixColor, type: 'normal'}).map(() => Array(board.column).fill({color: matrixColor, type: 'normal'}));

        paintGoal(matrix, matrixColor)

        setBoardMatrix(matrix)
    }

    useEffect(() => {
        matrixGenerator()
    }, [])

    const clickHandler = (type: string) => {
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

  return (
    <main className="colorsGame" style={{aspectRatio: `${board.column}/${board.row}`}}>
        {level === 0 ? (
            <span>hi</span>
        ) : level === 22 ? (
            <span>bye</span>
        ) : (
            <GameBoard matrix={boardMatrix} board={board} onClickHandler={clickHandler} />
        )}
    </main>
  );
}

export default ColorsGame;
