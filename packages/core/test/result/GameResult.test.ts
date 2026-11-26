import { Cell, PlayerType } from '../../src';
import GameResult from '../../src/result/GameResult';

test('should create a tied result', () => {
  const tied = new GameResult([], true);

  expect(tied.finished).toBeTruthy();
  expect(tied.tied).toBeTruthy();
  expect(tied.inProgress).toBeFalsy();
});

test('should create a winning result', () => {
  const cell1 = new Cell(0, 0, PlayerType.X);
  const cell2 = new Cell(0, 1, PlayerType.X);
  const cell3 = new Cell(0, 2, PlayerType.X);
  const winning = new GameResult([cell1, cell2, cell3]);

  expect(winning.finished).toBeTruthy();
  expect(winning.tied).toBeFalsy();
  expect(winning.hasCell(0, 0)).toBeTruthy();
  expect(winning.hasCell(1, 1)).toBeFalsy();
});
