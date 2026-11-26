import { Player, PlayerType } from '../../src';
import Game from '../../src/game/Game';

test('should return the next player', () => {
  const game = Game.create(
    new Player('P1', PlayerType.O),
    new Player('P2', PlayerType.X),
  );

  expect(game.currentPlayer.type).toBe(PlayerType.O);
  expect(game.nextRound().currentPlayer.type).toBe(PlayerType.X);
});

test('should finished the game with one as winner', () => {
  const game = Game.create(
    new Player('P1', PlayerType.O),
    new Player('P2', PlayerType.X),
  )
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.xWins).toBeFalsy();
  expect(game.result.oWins).toBeTruthy();
  expect(game.player1.score).toBe(1);
  expect(game.player2.score).toBe(0);
});

test('should finished the game with two as winner', () => {
  const game = Game.create(
    new Player('P1', PlayerType.O),
    new Player('P2', PlayerType.X),
  )
    .addMove(1, 1)
    .addMove(0, 0)
    .addMove(1, 2)
    .addMove(0, 1)
    .addMove(2, 2)
    .addMove(0, 2)
    .addMove(2, 0);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.oWins).toBeFalsy();
  expect(game.result.xWins).toBeTruthy();
  expect(game.player1.score).toBe(0);
  expect(game.player2.score).toBe(1);
});

test('should clean the game after winning', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O),
  )
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2)
    .clear();

  expect(game.result.inProgress).toBeTruthy();
  expect(game.player1.score).toBe(0);
  expect(game.player2.score).toBe(0);
});

test('should start the next round after a winning', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O),
  )
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2)
    .nextRound();

  expect(game.result.inProgress).toBeTruthy();
  expect(game.player1.score).toBe(1);
  expect(game.player2.score).toBe(0);
  expect(game.currentPlayer.type).toBe(game.player2.type);
});

test('should switch the player after finished a game', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O),
  ).clear();
  expect(game.currentPlayer.type).toBe(game.player2.type);

  const newGame = game.clear();
  expect(newGame.currentPlayer.type).toBe(game.player1.type);
});

test('should switch the game after next round', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O),
  ).nextRound();
  expect(game.currentPlayer.type).toBe(game.player2.type);

  const newGame = game.nextRound();
  expect(newGame.currentPlayer.type).toBe(game.player1.type);
});

test('should ignore the same movement', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O),
  ).addMove(0, 0);

  const newGame = game.addMove(0, 0);
  expect(game === newGame).toBeTruthy();
});

test('should ignore the winning move', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O),
  )
    .addMove(1, 1)
    .addMove(0, 0)
    .addMove(1, 2)
    .addMove(0, 1)
    .addMove(2, 2)
    .addMove(0, 2)
    .addMove(2, 0);

  const newGame = game.addMove(2, 2);
  expect(game === newGame).toBeTruthy();
});

test('should generate a tied game', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O),
  )
    .addMove(0, 0)
    .addMove(0, 1)
    .addMove(0, 2)
    .addMove(1, 1)
    .addMove(1, 0)
    .addMove(1, 2)
    .addMove(2, 1)
    .addMove(2, 0)
    .addMove(2, 2);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.tied).toBeTruthy();
});
