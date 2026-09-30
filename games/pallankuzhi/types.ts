export type Player = 0 | 1;

// UNVERIFIED: board size and starting seeds vary by region. Confirm with research.
export const PITS_PER_SIDE = 7;
export const SEEDS_PER_PIT = 6;
export const TOTAL_PITS = PITS_PER_SIDE * 2;

export interface GameState {
  pits: number[];          // index 0-6 = Player 0's side, 7-13 = Player 1's side
  captured: number[];      // captured[player] = seeds won so far
  currentPlayer: Player;
  isOver: boolean;
  winner: Player | null;   // null while playing, or on a draw
}

export interface Move {
  pitIndex: number;        // which of your own pits to pick up
}