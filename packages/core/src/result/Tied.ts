import Board from '../game/Board';
import Checker from './Checker';
import GameResult from './GameResult';

export default class Tied implements Checker {
  check(board: Board): GameResult {
    return board.isFull() ? new GameResult([], true) : new GameResult();
  }
}
