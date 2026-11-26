import { PlayerType } from '../../src';
import Board from '../../src/game/Board';

test('should create an empty board', () => {
  const board = Board.empty();

  expect(board.cols).toBe(3);
  expect(board.rows).toBe(3);
  expect(board.isFull()).toBeFalsy();
});

test('should return all cell of board', () => {
  const board = Board.empty();

  expect(board.items.length).toBe(9);
});

test('should mark one cell by row and col', () => {
  const board = Board.empty().set(1, 1, PlayerType.X);

  expect(board.isNotEmpty(1, 1)).toBeTruthy();
  expect(board.isEmpty(1, 1)).toBeFalsy();
});

test('should return empty for empty cell', () => {
  const board = Board.empty();

  expect(board.isEmpty(10, 1)).toBeTruthy();
  expect(board.isNotEmpty(10, 1)).toBeFalsy();
});

test('should ignore invalid cell', () => {
  const board = Board.empty();
  const sameBoard = board.set(10, 1, PlayerType.X);

  expect(board === sameBoard).toBeTruthy();
});
