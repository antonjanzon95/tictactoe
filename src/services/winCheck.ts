import { Game } from '../models/CGame';
import { Shape } from '../models/Shape';

export const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export interface winningComboShape {
  combo: number[];
  shape: Shape;
}

export const winCheck = (game: Game) => {
  let winningShapeAndCombo: winningComboShape | null = null;
  winningCombinations.forEach((combination) => {
    if (
      game.grid[combination[0]].shape &&
      game.grid[combination[0]].shape == game.grid[combination[1]].shape &&
      game.grid[combination[1]].shape == game.grid[combination[2]].shape
    ) {
      winningShapeAndCombo = {
        combo: combination,
        shape: game.grid[combination[0]].shape,
      };
    }
  });

  return winningShapeAndCombo;
};

export const tieCheck = (game: Game): boolean => {
  const isTie = game.grid.every((square) => square.shape);

  return isTie;
};
