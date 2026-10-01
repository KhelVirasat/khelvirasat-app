import { GameState, Move, FINAL_SQUARE } from "./types";

export function getLegalMoves(state: GameState, roll: number): Move[] {
  const moves: Move[] = [];
  state.pawns[state.currentPlayer].forEach((position, pawnIndex) => {
    if (position + roll <= FINAL_SQUARE) {
      moves.push({ pawnIndex });
    }
  });
  return moves;
}

export function applyMove(state: GameState, move: Move, roll: number): GameState {
  const newPawns = state.pawns.map(p => [...p]);          // copy, don't mutate
  newPawns[state.currentPlayer][move.pawnIndex] += roll;

  const allHome = newPawns[state.currentPlayer].every(p => p === FINAL_SQUARE);
  return {
    pawns: newPawns,
    currentPlayer: state.currentPlayer === 0 ? 1 : 0,
    winner: allHome ? state.currentPlayer : null,
  };
}
