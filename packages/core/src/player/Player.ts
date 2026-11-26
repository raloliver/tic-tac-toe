import { PlayerType } from '../shared/PlayerType';

/**
 * always return a new instance (immutable)
 */
export default class Player {
  constructor(
    readonly name: string,
    readonly type: PlayerType,
    readonly score = 0,
  ) {}

  addScore(score: number): Player {
    if (score === 0) {
      return this;
    }

    return new Player(this.name, this.type, this.score + score);
  }

  clear(): Player {
    return new Player(this.name, this.type, 0);
  }
}
