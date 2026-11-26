import { PlayerType } from './PlayerType';

export default class Cell {
  constructor(
    readonly row: number,
    readonly col: number,
    readonly playerType: PlayerType | null = null,
  ) {}

  markWith(playerType: PlayerType): Cell {
    if (this.playerType !== null) {
      return this;
    }

    return new Cell(this.row, this.col, playerType);
  }

  isEmpty(): boolean {
    return this.playerType === null;
  }

  isNotEmpty(): boolean {
    return !this.isEmpty();
  }
}
