import { Game } from '../models/CGame';
import { Match } from '../models/CMatch';
import { Player } from '../models/CPlayer';

export const saveGameToStorage = (game: Game) => {
  localStorage.setItem('game', JSON.stringify(game));
};

export const fetchGame = (): Game | null => {
  const storedGame = localStorage.getItem('game');
  if (typeof storedGame !== 'string') {
    return null;
  }
  const parsedGame: Game = JSON.parse(storedGame);

  return parsedGame;
};

export const saveScore = (players: Player[]) => {
  const match = new Match(players);
  const scores = localStorage.getItem('scores');
  let parsedScores;

  if (typeof scores !== 'string') {
    parsedScores = [];
  } else {
    parsedScores = JSON.parse(scores);
  }

  const scoresAfterAdded = [...parsedScores, match];

  localStorage.setItem('scores', JSON.stringify(scoresAfterAdded));
};

export const fetchScores = () => {
  const scoresFromStorage = localStorage.getItem('scores');

  if (typeof scoresFromStorage !== 'string') {
    return;
  }

  const parsedScores = JSON.parse(scoresFromStorage);

  return parsedScores;
};
