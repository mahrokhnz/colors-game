import './index.css';
import React, {useMemo, useState} from 'react';

//TODO: prettier, eslint
//TODO: add typescript
//TODO: check github pages
//TODO: colors are not hard to detect
//TODO: create components

let basicShade = 78
function ColorsGame() {
    const [level, setLevel] = useState(1)
    const [lives, setLives] = useState(5)
    const [board, setBoard] = useState({
        row: 3,
        column: 4,
    })

    const randomColorGenerator = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    const paintGoal = (matrix, matrixColor) => {
        const rowIndex = Math.floor(Math.random() * matrix.length)
        const colIndex = Math.floor(Math.random() * matrix[rowIndex].length)

        matrix[rowIndex][colIndex] = {color: `${matrixColor}${basicShade + level}`, type: 'goal'}
    }

    const boardParts = useMemo(() => {
        const matrixColor = randomColorGenerator()
        const matrix =  Array(board.row).fill({color: matrixColor, type: 'normal'}).map(() => Array(board.column).fill({color: matrixColor, type: 'normal'}));

        paintGoal(matrix, matrixColor)

        return matrix
    }, [board])

    const clickHandler = (type) => {
        if (type === 'goal' && level <= 21) {
            setLevel(level + 1)

            if (level%3 === 0) {
                setBoard({
                    row: board.row + 1,
                    column: board.column + 2
                })
            }

            // TODO: update paint goal in every level
        } else if (lives > 0) {
            setLives(lives - 1)
        }
    }

    console.log({level, board})

  return (
    <main className="colorsGame">
        {level === 0 ? (
            <span>hi</span>
        ) : level === 22 ? (
            <span>bye</span>
        ) : (
            // TODO: key not true index
            // TODO: some colors wont work
            <div className='boardWrapper' style={{gridTemplateRows: `repeat(${board.row}, auto)`}}>
                {boardParts.map((row, rowIndex) => (
                    <div className='boardRow' key={`row-${rowIndex + 1}-${level}`}>
                        {row.map((item, colIndex) => (
                            <div className='boardCol' key={`row-${rowIndex + 1}-${colIndex + 1}-${level}`} style={{backgroundColor: item.color}} onClick={() => clickHandler(item.type)}></div>
                        ))}
                    </div>
                ))}
            </div>
        )}
    </main>
  );
}

export default ColorsGame;
