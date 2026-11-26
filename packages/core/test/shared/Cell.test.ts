import { Cell, PlayerType } from '../../src';

test('should create a filled cell', () => {
  const cell = new Cell(0, 2, PlayerType.X);

  expect(cell.row).toBe(0);
  expect(cell.col).toBe(2);
  expect(cell.playerType).toBe(PlayerType.X);
  expect(cell.isEmpty()).toBeFalsy();
  expect(cell.isNotEmpty()).toBeTruthy();
});

test('should create an empty cell', () => {
  const cell = new Cell(0, 2);

  expect(cell.row).toBe(0);
  expect(cell.col).toBe(2);
  expect(cell.playerType).toBeNull();
  expect(cell.isEmpty()).toBeTruthy();
  expect(cell.isNotEmpty()).toBeFalsy();
});

test('should filled an empty cell', () => {
  const emptyCell = new Cell(0, 2);

  expect(emptyCell.playerType).toBeNull();

  const cell = emptyCell.markWith(PlayerType.O);

  expect(cell.playerType).toBe(PlayerType.O);
});

test('should ignore filled cell', () => {
  const cell = new Cell(0, 2).markWith(PlayerType.O);
  const sameCell = cell.markWith(PlayerType.X);

  expect(cell === sameCell).toBeTruthy();
});
