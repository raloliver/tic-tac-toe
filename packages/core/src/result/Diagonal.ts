import Board from '../game/Board';
import Cells from './Cells';
import Checker from './Checker';
import GameResult from './GameResult';

export default class Diagonal implements Checker {
  check(board: Board): GameResult {
    const diagonal1 = new Cells([
      [0, 0],
      [1, 1],
      [2, 2],
    ]).check(board);
    const diagonal2 = new Cells([
      [0, 2],
      [1, 1],
      [2, 0],
    ]).check(board);

    return diagonal1.finished ? diagonal1 : diagonal2;
  }
}
