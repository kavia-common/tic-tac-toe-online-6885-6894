import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { calculateWinner, isDraw } from './utils/game';

// PUBLIC_INTERFACE 
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [vsComputer, setVsComputer] = useState(false);
  
  const winner = calculateWinner(squares);
  const gameIsDraw = isDraw(squares, winner);
  
  const handleClick = (i) => {
    if (squares[i] || winner) return;
    
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  
  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner.player}`;
    }
    if (gameIsDraw) {
      return 'Game is a draw!';
    }
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <div className="app">
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        
        <div className="status">
          {getStatus()}
        </div>
        
        <Board
          squares={squares}
          winningLine={winner?.line}
          onClick={handleClick}
        />
        
        <div className="controls">
          <button
            className="control-button primary"
            onClick={resetGame}
          >
            New Game
          </button>
          
          <button
            className="control-button secondary"
            onClick={() => setVsComputer(!vsComputer)}
            disabled={true}
            title="Coming soon!"
          >
            Play vs Computer
            <span className="coming-soon">(coming soon)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
