import { describe, test, expect } from "vitest";
import { createInitialState, getLegalMoves, applyMove } from "./rules";
import { GameState, TOTAL_PITS } from "./types";

const makeState = (seeds: Record<number, number>): GameState => {
  const pits = Array(TOTAL_PITS).fill(0);
  Object.entries(seeds).forEach(([i, n]) => (pits[Number(i)] = n));
  return { pits, captured: [0, 0], currentPlayer: 0, isOver: false, winner: null };
};

describe("Pallankuzhi rules (placeholder, unverified)", () => {
  test("player 0 can only pick up pits on their own side", () => {
    const moves = getLegalMoves(createInitialState());
    expect(moves.every(m => m.pitIndex >= 0 && m.pitIndex <= 6)).toBe(true);
    expect(moves).toHaveLength(7);
  });

  test("applyMove does not change the original state", () => {
    const state = createInitialState();
    applyMove(state, { pitIndex: 0 });
    expect(state.pits[0]).toBe(6);
  });

  test("a move cannot be made from an empty pit", () => {
    const state = makeState({ 0: 0, 1: 3, 9: 2 });
    expect(() => applyMove(state, { pitIndex: 0 })).toThrow();
  });

  test("capture: empty pit ahead means the pit after it is captured", () => {
    // pit0 sows into pit1, pit2 has seeds so it continues (pits 3-7),
    // then pit8 is empty so pit9 (3 seeds) is captured.
    const state = makeState({ 0: 1, 2: 5, 9: 3 });
    const result = applyMove(state, { pitIndex: 0 });
    expect(result.captured[0]).toBe(3);
    expect(result.pits[9]).toBe(0);
  });

  test("total seeds are never created or lost", () => {
    const state = createInitialState();
    const result = applyMove(state, { pitIndex: 2 });
    const total = result.pits.reduce((a, b) => a + b, 0) + result.captured[0] + result.captured[1];
    expect(total).toBe(TOTAL_PITS * 6);
  });
});