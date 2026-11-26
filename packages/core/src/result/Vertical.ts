import Board from '../game/Board';
import Cells from './Cells';
import Checker from './Checker';
import GameResult from './GameResult';

export default class Vertical implements Checker {
  check(board: Board): GameResult {
    const result = [
      new Cells([
        [0, 0],
        [1, 0],
        [2, 0],
      ]).check(board),
      new Cells([
        [0, 1],
        [1, 1],
        [2, 1],
      ]).check(board),
      new Cells([
        [0, 2],
        [1, 2],
        [2, 2],
      ]).check(board),
    ].find((result) => result.finished);

    return result ?? new GameResult();
  }
}
