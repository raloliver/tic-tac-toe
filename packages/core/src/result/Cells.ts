import Board from '../game/Board';
import Cell from '../shared/Cell';
import Checker from './Checker';
import GameResult from './GameResult';

export default class Cells implements Checker {
  constructor(private readonly cells: [number, number][]) {}

  check(board: Board): GameResult {
    const cells = this.cells.map(([row, col]) => board.get(row, col));
    const playerTypes = cells.map((cell) => cell!.playerType);
    const [first] = playerTypes;

    return first !== null &&
      playerTypes.every((playerType) => playerType === first)
      ? new GameResult(cells as Cell[])
      : new GameResult();
  }
}
