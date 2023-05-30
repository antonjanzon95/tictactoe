import { Shape } from './Shape';

export class Player {
  score: number = 0;
  constructor(public name: string, public shape: Shape) {}
}
