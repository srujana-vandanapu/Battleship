import React, { useState } from "react";
import "./index.css";
import GameBoard from "./components/GameBoard";
import Instructions from "./components/Instructions";
import "bootstrap/dist/css/bootstrap.min.css";

const initialGameBoard1 = () => [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
];

const initialGameBoard2 = () => [
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1Board, setPlayer1Board] = useState(initialGameBoard1());
  const [player2Board, setPlayer2Board] = useState(initialGameBoard2());
  const [hitCount1, setHitCount1] = useState(0);
  const [hitCount2, setHitCount2] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handleFireTorpedo = (row, col, player) => {
    if (gameOver) {
      alert("Game is over. Please reset the game.");
      return;
    }

    if (player !== currentPlayer) {
      alert(`It's Player ${currentPlayer}'s turn!`);
      return;
    }

    let hit = false;
    if (player === 1) {
      const newBoard = player2Board.slice();
      if (newBoard[row][col] === 0) {
        newBoard[row][col] = 3;
        setPlayer2Board(newBoard);
      } else if (newBoard[row][col] === 1) {
        newBoard[row][col] = 2;
        setPlayer2Board(newBoard);
        setHitCount1(hitCount1 + 1);
        hit = true;
        if (hitCount1 + 1 === 26) {
          alert("Player 1 wins!");
          setGameOver(true);
        }
      } else if (newBoard[row][col] > 1) {
        alert("You already fired at this location.");
      }
    } else {
      const newBoard = player1Board.slice();
      if (newBoard[row][col] === 0) {
        newBoard[row][col] = 3;
        setPlayer1Board(newBoard);
      } else if (newBoard[row][col] === 1) {
        newBoard[row][col] = 2;
        setPlayer1Board(newBoard);
        setHitCount2(hitCount2 + 1);
        hit = true;
        if (hitCount2 + 1 === 26) {
          alert("Player 2 wins!");
          setGameOver(true);
        }
      } else if (newBoard[row][col] > 1) {
        alert("You already fired at this location.");
      }
    }
    if (!hit) {
      switchPlayer();
    }
  };

  const resetGame = () => {
    setPlayer1Board(initialGameBoard1());
    setPlayer2Board(initialGameBoard2());
    setHitCount1(0);
    setHitCount2(0);
    setCurrentPlayer(1);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1 className="text-center">Battleship - Game</h1>
      <Instructions />
      <h2 className="text-center">Current Player: Player {currentPlayer}</h2>

      <div id="gameboards">
        <GameBoard
          gameBoard={player1Board}
          fireTorpedo={(row, col) => handleFireTorpedo(row, col, 2)}
          highlight={currentPlayer === 2}
        />
        <GameBoard
          gameBoard={player2Board}
          fireTorpedo={(row, col) => handleFireTorpedo(row, col, 1)}
          highlight={currentPlayer === 1}
        />
      </div>
      <button
        className="btn text-dark"
        style={{ backgroundColor: "#E6EBE0" }}
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
}

export default App;
