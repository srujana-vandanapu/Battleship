import React from "react";
import "./index.css";

const rows = 10;
const cols = 10;
const squareSize = 50;

const GameBoard = ({ gameBoard, fireTorpedo, highlight }) => {
  return (
    <div id="gameboard">
      {Array.from({ length: cols }).map((_, i) =>
        Array.from({ length: rows }).map((_, j) => {
          const id = `s${j}${i}`;
          const topPosition = j * squareSize;
          const leftPosition = i * squareSize;
          const style = {
            top: `${topPosition}px`,
            left: `${leftPosition}px`,
            background:
              gameBoard[j][i] === 0
                ? "#E6EBE0"
                : gameBoard[j][i] === 1
                ? "#E6EBE0"
                : gameBoard[j][i] === 2
                ? "#ED6A5A"
                : "#F4F1BB",
          };
          return (
            <div
              key={id}
              id={id}
              style={style}
              onClick={() => fireTorpedo(j, i)}
              className={`${
                gameBoard[j][i] === 2 ? "hit " :
                gameBoard[j][i] === 3 ? "miss " :
                gameBoard[j][i] === 1 ? "hidden-ship " :
                ""
              }${highlight ? "highlight" : ""}`}
            />
          );
        })
      )}
    </div>
  );
};

export default GameBoard;
