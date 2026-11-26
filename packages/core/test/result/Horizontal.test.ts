import { PlayerType } from '../../src';
import Board from '../../src/game/Board';
import Horizontal from '../../src/result/Horizontal';

test('should finished X as winner', () => {
  const board = Board.empty()
    .set(0, 0, PlayerType.X)
    .set(0, 1, PlayerType.X)
    .set(0, 2, PlayerType.X);
  const result = new Horizontal().check(board);

  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeTruthy();
  expect(result.oWins).toBeFalsy;
});

test('should continue in progress without winning', () => {
  const board = Board.empty()
    .set(0, 0, PlayerType.X)
    .set(0, 1, PlayerType.X)
    .set(0, 2, PlayerType.O);
  const result = new Horizontal().check(board);

  expect(result.inProgress).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
