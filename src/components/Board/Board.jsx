import React, { useState } from 'react';
import Square from '../Square/Square.jsx';
import './Board.css';

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinner(squares) {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = getWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  const isFinished = Boolean(winner || isDraw);

  function handleSquareClick(index) {
    if (squares[index] || isFinished) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleNewGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if (winner) status = `Vencedor: ${winner}`;
  else if (isDraw) status = 'Empate';
  else status = `Vez de: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="board-panel">
      <p className={`game-status${isFinished ? ' is-finished' : ''}`} role="status" aria-live="polite">
        {status}
      </p>
      <div className="board" role="group" aria-label="Tabuleiro do jogo da velha">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleSquareClick(index)}
            label={`Casa ${index + 1}${value ? `: ${value}` : ', vazia'}`}
            disabled={Boolean(value || isFinished)}
          />
        ))}
      </div>
      <button className="restart-button" type="button" onClick={handleNewGame}>
        Novo Jogo <span aria-hidden="true">↻</span>
      </button>
    </div>
  );
}
