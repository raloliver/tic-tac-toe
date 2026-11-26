import { Board, PlayerType } from '../../src';
import Tied from '../../src/result/Tied';

test('should return game in progress', () => {
  const board = Board.empty()
    .set(0, 0, PlayerType.O)
    .set(1, 1, PlayerType.O)
    .set(2, 2, PlayerType.O);
  const result = new Tied().check(board);

  expect(result.finished).toBeFalsy();
  expect(result.tied).toBeFalsy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});

test('should return a tied game', () => {
  const board = Board.empty()
    .set(0, 0, PlayerType.O)
    .set(0, 1, PlayerType.X)
    .set(0, 2, PlayerType.O)
    .set(1, 0, PlayerType.O)
    .set(1, 1, PlayerType.X)
    .set(1, 2, PlayerType.O)
    .set(2, 0, PlayerType.X)
    .set(2, 1, PlayerType.O)
    .set(2, 2, PlayerType.X);
  const result = new Tied().check(board);

  expect(result.finished).toBeTruthy();
  expect(result.tied).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
