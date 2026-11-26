import { Player, PlayerType } from '../../src';

test('should return the same instance when add 0 to score', () => {
  const player = new Player('P1', PlayerType.O);

  expect(player.addScore(0) === player).toBeTruthy();
});

test('should return the a different instance when add score', () => {
  const player = new Player('P1', PlayerType.O);

  expect(player.addScore(1) === player).toBeFalsy();
});

test('should add 10 to score player', () => {
  const player = new Player('P1', PlayerType.O).addScore(10);

  expect(player.name).toBe('P1');
  expect(player.type).toBe(PlayerType.O);
  expect(player.score).toBe(10);
});

test('should clear player with score', () => {
  const player = new Player('P1', PlayerType.O, 100).clear();

  expect(player.name).toBe('P1');
  expect(player.type).toBe(PlayerType.O);
  expect(player.score).toBe(0);
});
