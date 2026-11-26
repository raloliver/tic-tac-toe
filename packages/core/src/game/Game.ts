import Player from '../player/Player';
import Diagonal from '../result/Diagonal';
import GameResult from '../result/GameResult';
import Horizontal from '../result/Horizontal';
import Tied from '../result/Tied';
import Vertical from '../result/Vertical';
import { PlayerType } from '../shared/PlayerType';
import Board from './Board';

export default class Game {
  private constructor(
    readonly player1: Player,
    readonly player2: Player,
    readonly board: Board,
    readonly first: Player,
    readonly currentPlayer: Player,
    readonly ties: number = 0,
    readonly result: GameResult = new GameResult(),
  ) {}

  static create(player1: Player, player2: Player): Game {
    return new Game(player1, player2, Board.empty(), player1, player1);
  }

  nextRound(): Game {
    const newPlayer =
      this.first.type === this.player1.type ? this.player2 : this.player1;

    return new Game(
      this.player1,
      this.player2,
      Board.empty(),
      newPlayer,
      newPlayer,
      this.ties,
    );
  }

  clear(): Game {
    const newPlayer =
      this.first.type === this.player1.type ? this.player2 : this.player1;

    return new Game(
      this.player1.clear(),
      this.player2.clear(),
      Board.empty(),
      newPlayer,
      newPlayer,
    );
  }

  addMove(row: number, col: number): Game {
    if (this.board.isNotEmpty(row, col)) {
      return this;
    }

    if (!this.result.inProgress) {
      return this;
    }

    const board = this.board.set(row, col, this.currentPlayer.type);
    const result = this.calculateResult(board);
    const [player1, player2] = this.players(result);

    return new Game(
      player1,
      player2,
      board,
      this.first,
      this.currentPlayer,
      result.tied ? this.ties + 1 : this.ties,
      result,
    ).switchPlayer();
  }

  private switchPlayer(): Game {
    if (!this.result.inProgress) {
      return this;
    }
    const newPlayer =
      this.currentPlayer.type === this.player1.type
        ? this.player2
        : this.player1;

    return new Game(
      this.player1,
      this.player2,
      this.board,
      this.first,
      newPlayer,
      this.ties,
      this.result,
    );
  }

  private calculateResult(board: Board): GameResult {
    const results = [
      new Vertical().check(board),
      new Horizontal().check(board),
      new Diagonal().check(board),
    ];
    return results.find((result) => result.finished) ?? new Tied().check(board);
  }

  private players(result: GameResult): [Player, Player] {
    if (result.xWins) {
      return this.player1.type === PlayerType.X
        ? [this.player1.addScore(1), this.player2]
        : [this.player1, this.player2.addScore(1)];
    }

    if (result.oWins) {
      return this.player1.type === PlayerType.O
        ? [this.player1.addScore(1), this.player2]
        : [this.player1, this.player2.addScore(1)];
    }

    return [this.player1, this.player2];
  }
}
