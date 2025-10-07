import React from 'react';
import Square from './Square';

// PUBLIC_INTERFACE
function Board({ squares, winningLine, onClick }) {
  const renderSquare = (i) => (
    <Square
      key={i}
      value={squares[i]}
      onClick={() => onClick(i)}
      isWinning={winningLine?.includes(i)}
    />
  );

  return (
    <div className="board">
      <div className="board-row">
        {[0, 1, 2].map(i => renderSquare(i))}
      </div>
      <div className="board-row">
        {[3, 4, 5].map(i => renderSquare(i))}
      </div>
      <div className="board-row">
        {[6, 7, 8].map(i => renderSquare(i))}
      </div>
    </div>
  );
}

export default Board;
