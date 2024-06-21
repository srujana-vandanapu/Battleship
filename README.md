# React + Vite


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Battleship 


[Play here](https://battle-ship-s.netlify.app/)

#### Rules

Objective: Sink all of your opponent's ships before they sink yours.
Setup:
Each player has a 10x10 grid.
Ships are already placed on the grids.
Player 1's board is on the left; Player 2's board is on the right.
There are one 2x5 ship, one 1x4 ship,one 1x5 ship,two 1x2 ship and one 1x3 ship placed in any direction
Gameplay:
Turns: Players take turns firing at the opponent's grid. Click on a cell to fire. Current player's board is highlighted.
Hits and Misses: A hit turns the cell red. A miss turns the cell grey.
Switching Turns: After a miss, turns switch. After a hit, the same player continues.
Winning: The first player to sink all 26 cells of the opponent's ships wins. The game stops when a player wins.
Resetting the Game: Click "Reset Game" to start over.
