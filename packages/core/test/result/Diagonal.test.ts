import { PlayerType } from '../../src';
import Board from '../../src/game/Board';
import Diagonal from '../../src/result/Diagonal';

test('should finished O as winner', () => {
  const board = Board.empty()
    .set(0, 0, PlayerType.O)
    .set(1, 1, PlayerType.O)
    .set(2, 2, PlayerType.O);
  const result = new Diagonal().check(board);

  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeTruthy();
});

test('should finished X as winner', () => {
  const board = Board.empty()
    .set(0, 2, PlayerType.X)
    .set(1, 1, PlayerType.X)
    .set(2, 0, PlayerType.X);
  const result = new Diagonal().check(board);

  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeTruthy();
  expect(result.oWins).toBeFalsy();
});

test('should continue in progress without winning', () => {
  const board = Board.empty()
    .set(0, 0, PlayerType.X)
    .set(1, 1, PlayerType.X)
    .set(2, 2, PlayerType.O);
  const result = new Diagonal().check(board);

  expect(result.inProgress).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
