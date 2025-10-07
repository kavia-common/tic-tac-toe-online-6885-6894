import React from 'react';

// PUBLIC_INTERFACE
function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
      aria-label={`Square ${value || 'empty'}`}
    >
      {value}
    </button>
  );
}

export default Square;
