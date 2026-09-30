import {
  GameState,
  Move,
  Player,
  PITS_PER_SIDE,
  SEEDS_PER_PIT,
  TOTAL_PITS,
} from "./types";

export function createInitialState(): GameState {
  return {
    pits: Array(TOTAL_PITS).fill(SEEDS_PER_PIT),
    captured: [0, 0],
    currentPlayer: 0,
    isOver: false,
    winner: null,
  };
}

export function ownsPit(player: Player, pitIndex: number): boolean {
  const start = player * PITS_PER_SIDE;
  return pitIndex >= start && pitIndex < start + PITS_PER_SIDE;
}

// You may only pick up a non-empty pit on your own side.
export function getLegalMoves(state: GameState): Move[] {
  if (state.isOver) return [];
  const moves: Move[] = [];
  state.pits.forEach((seeds, pitIndex) => {
    if (seeds > 0 && ownsPit(state.currentPlayer, pitIndex)) {
      moves.push({ pitIndex });
    }
  });
  return moves;
}

export function applyMove(state: GameState, move: Move): GameState {
  const isLegal = getLegalMoves(state).some(m => m.pitIndex === move.pitIndex);
  if (!isLegal) throw new Error("Illegal move");

  const pits = [...state.pits];            // copy, never mutate the old state
  const captured = [...state.captured];
  const player = state.currentPlayer;

  let hand = pits[move.pitIndex];
  pits[move.pitIndex] = 0;
  let pos = move.pitIndex;
  let safety = 0;

  // UNVERIFIED: sowing direction, chain continuation and capture rule.
  while (true) {
    if (++safety > 1000) throw new Error("Sowing did not end");

    // Sow one seed per pit, moving forward
    while (hand > 0) {
      pos = (pos + 1) % TOTAL_PITS;
      pits[pos] += 1;
      hand -= 1;
    }

    const next = (pos + 1) % TOTAL_PITS;
    if (pits[next] > 0) {
      // Next pit has seeds: pick them up and keep sowing
      hand = pits[next];
      pits[next] = 0;
      pos = next;
    } else {
      // Next pit is empty: capture the pit after it, then the turn ends
      const target = (next + 1) % TOTAL_PITS;
      captured[player] += pits[target];
      pits[target] = 0;
      break;
    }
  }

  const nextPlayer: Player = player === 0 ? 1 : 0;
  const nextHasSeeds = pits.some((s, i) => s > 0 && ownsPit(nextPlayer, i));

  // UNVERIFIED: end-of-round handling. Real Pallankuzhi plays multiple rounds
  // (your notes mention the "rubbish pit" economy). Not implemented yet.
  if (!nextHasSeeds) {
    const totals = [0, 1].map(p =>
      captured[p] + pits.reduce((sum, s, i) => sum + (ownsPit(p as Player, i) ? s : 0), 0)
    );
    const winner: Player | null =
      totals[0] === totals[1] ? null : totals[0] > totals[1] ? 0 : 1;
    return { pits, captured, currentPlayer: nextPlayer, isOver: true, winner };
  }

  return { pits, captured, currentPlayer: nextPlayer, isOver: false, winner: null };
}
