import './index.css';
import React from 'react';

interface GameBoardProps {
    matrix: any,
    board: any,
    onClickHandler: (type: string) => void
}

function GameBoard({matrix, board, onClickHandler}: GameBoardProps) {
    const clickHandler = (type) => {
        if (onClickHandler instanceof Function) {
            onClickHandler(type)
        }
    }

  return (
      <div className='boardWrapper' style={{aspectRatio: `${board.column}/${board.row}`, gridTemplateRows: `repeat(${board.row}, auto)`}}>
          {matrix?.map((row, rowIndex) => (
              <div className='boardRow' key={rowIndex + 1}>
                  {row.map((item, colIndex) => (
                      <div className='boardCol' key={`${rowIndex + 1}-${colIndex + 1}`} style={{backgroundColor: item.color}} onClick={() => clickHandler(item.type)}></div>
                  ))}
              </div>
          ))}
      </div>
  );
}

export default GameBoard;
