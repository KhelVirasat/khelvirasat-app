import { describe, test, expect } from "vitest";
import { getLegalMoves, applyMove } from "./rules";
import { GameState } from "./types";

const makeState = (pawns: number[][]): GameState => ({
  pawns,
  currentPlayer: 0,
  winner: null,
});

describe("Chowka Bhara rules (placeholder)", () => {
  test("a pawn cannot move past the final square", () => {
    const state = makeState([[23, 0, 0, 0], [0, 0, 0, 0]]);
    const moves = getLegalMoves(state, 6);
    expect(moves.some(m => m.pawnIndex === 0)).toBe(false);
  });

  test("applyMove does not change the original state", () => {
    const state = makeState([[0, 0, 0, 0], [0, 0, 0, 0]]);
    applyMove(state, { pawnIndex: 0 }, 3);
    expect(state.pawns[0][0]).toBe(0);
  });
});