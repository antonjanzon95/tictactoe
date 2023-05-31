import { Player } from './CPlayer';
import { CSquare } from './CSquare';

export class Game {
  grid: CSquare[] = Array.from({ length: 9 }, () => new CSquare());
  isPlaying: Player;
  isDone: boolean = false;

  constructor(public players: Player[]) {
    this.isPlaying = this.players[Math.round(Math.random())];
  }
}
