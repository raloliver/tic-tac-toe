import Board from '../game/Board';
import GameResult from './GameResult';

export default interface Checker {
  check(board: Board): GameResult;
}
