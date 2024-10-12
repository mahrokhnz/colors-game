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
    const [board, setBoard] = useState({
        row: 3,
        column: 4,
    })

    const randomColorGenerator = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    const paintGoal = (matrix, color) => {
        const rowIndex = Math.floor(Math.random() * matrix.length)
        const colIndex = Math.floor(Math.random() * matrix[rowIndex].length)

        matrix[rowIndex][colIndex].color = `${color}${basicShade + level}`
    }

    const boardParts = useMemo(() => {
        const matrixColor = randomColorGenerator()
        // TODO: fix color in row
        const matrix =  Array(board.row).fill({color: matrixColor}).map(() => Array(board.column).fill({color: matrixColor}));

        paintGoal(matrix, matrixColor)

        return matrix
    }, [])

  return (
    <main className="colorsGame">
        {level === 0 ? (
            <span>hi</span>
        ) : level === 22 ? (
            <span>bye</span>
        ) : (
            // TODO: key not true index
            <div className='boardWrapper' style={{gridTemplateRows: `repeat(${board.row}, auto)`}}>
                {boardParts.map((row, rowIndex) => (
                    <div className='boardRow' key={`row-${rowIndex + 1}-${level}`}>
                        {row.map((item, colIndex) => (
                            <div className='boardCol' key={`row-${rowIndex + 1}-${colIndex + 1}-${level}`} style={{backgroundColor: item.color}}></div>
                        ))}
                    </div>
                ))}
            </div>
        )}
    </main>
  );
}

export default ColorsGame;
