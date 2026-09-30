export type Player = 0 | 1;

export interface GameState {
  pawns: number[][];        // pawns[player][pawnIndex] = square number
  currentPlayer: Player;
  winner: Player | null;
}

export interface Move {
  pawnIndex: number;
}

export const FINAL_SQUARE = 24; // PLACEHOLDER: confirm from the researcher's rules