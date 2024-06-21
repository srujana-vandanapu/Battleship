import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Instructions() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleInstructions = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return <div className="instructions container">
  <h2 onClick={toggleInstructions} style={{ cursor: 'pointer' }}>
    Click here for Instructions
  </h2>
  <div>
  {isOpen && (
    <ul>
      <li>
        <strong>Objective:</strong> Sink all of your opponent's ships before they sink yours.
      </li>
      <li>
        <strong>Setup:</strong>
        <ul>
          <li>Each player has a 10x10 grid.</li>
          <li>Ships are already placed on the grids.</li>
          <li>Player 1's board is on the left; Player 2's board is on the right.</li>
          <li>There are one <strong>2x5 ship, one 1x4 ship,one 1x5 ship,two 1x2 ship and one 1x3 ship</strong> placed in any direction</li>
        </ul>
      </li>
      <li>
        <strong>Gameplay:</strong>
        <ul>
          <li>
            <strong>Turns:</strong> Players take turns firing at the opponent's grid. Click on a cell to fire. Current player's board is highlighted.
          </li>
          <li><strong>Hits and Misses:</strong> A hit turns the cell red. A miss turns the cell grey.</li>
          <li><strong>Switching Turns:</strong> After a miss, turns switch. After a hit, the same player continues.</li>
          <li><strong>Winning:</strong> The first player to sink all 26 cells of the opponent's ships wins. The game stops when a player wins.</li>
          <li><strong>Resetting the Game:</strong> Click "Reset Game" to start over.</li>
        </ul>
      </li>
    </ul>
  )}
  </div>
</div>;
}
