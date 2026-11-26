import { Cell, PlayerType } from '../../src';
import GameResult from '../../src/result/GameResult';

test('should create a tied result', () => {
  const empatado = new GameResult([], true);

  expect(empatado.finished).toBeTruthy();
  expect(empatado.tied).toBeTruthy();
  expect(empatado.inProgress).toBeFalsy();
});

test('should create a winning result', () => {
  const c1 = new Cell(0, 0, PlayerType.X);
  const c2 = new Cell(0, 1, PlayerType.X);
  const c3 = new Cell(0, 2, PlayerType.X);
  const winning = new GameResult([c1, c2, c3]);

  expect(winning.finished).toBeTruthy();
  expect(winning.tied).toBeFalsy();
  expect(winning.hasCell(0, 0)).toBeTruthy();
  expect(winning.hasCell(1, 1)).toBeFalsy();
});
