/**
 * Calculates winner and returns winning line indices
 * @param {Array} squares - Array of 9 squares with 'X', 'O' or null
 * @returns {Object|null} Winner info with player and line, or null if no winner
 */
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal
    [2, 4, 6]
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        line: [a, b, c]
      };
    }
  }
  return null;
}

/**
 * Checks if the game is a draw
 * @param {Array} squares - Array of 9 squares
 * @param {Object|null} winner - Winner object from calculateWinner
 * @returns {boolean} True if game is a draw
 */
export function isDraw(squares, winner) {
  return !winner && squares.every(square => square !== null);
}
