import { PlayerType } from '../../src';
import Board from '../../src/game/Board';
import Vertical from '../../src/result/Vertical';

test('should finished O as winner', () => {
  const board = Board.empty()
    .set(0, 1, PlayerType.O)
    .set(1, 1, PlayerType.O)
    .set(2, 1, PlayerType.O);
  const result = new Vertical().check(board);

  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeTruthy();
});

test('should continue in progress without winning', () => {
  const board = Board.empty()
    .set(0, 2, PlayerType.X)
    .set(1, 2, PlayerType.X)
    .set(2, 2, PlayerType.O);
  const result = new Vertical().check(board);

  expect(result.inProgress).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
