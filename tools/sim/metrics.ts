// The three measures of map 1.2 (tension, the knock matters, the pick matters) plus pacing,
// computed from the bot races. Definitions are written into the JSON so nothing is redefined silently.

import type { KnockPolicyName, PickerName } from './bots.ts';
import type { GlassRecord, RaceRecord } from './experiment.ts';

export const DEFINITIONS = {
  reference_player:
    "The 'attentive player' of map 1.2 / 3.5 is the best-reader bot with good knocks (best+good). Every race is against the rival brain.",
  win_rate: 'Races the player wins / all races. Draws are reported separately and count as not won.',
  within_2s:
    'Share of races where both picked drops reach the seal and their arrival times differ by less than 2 s (all races in the denominator).',
  lead_swap_after_half:
    'Share of races with at least one change of leader between the two picked drops (1 mm hysteresis on x) after the leading picked drop has done 50% of its path.',
  median_gap: 'Median arrival gap in seconds over races where both picked drops reached the seal.',
  knock_value: 'win_rate(picker, good knocks) - win_rate(picker, no knocks), same glasses, same picker.',
  want_another_knock:
    "Share of best+good races where the bot tried to knock with no knock left before the final straight (the 4th knock, 'stop it!').",
  pick_value: 'win_rate(best, no knocks) - win_rate(random, no knocks).',
  biggest_position:
    '(win_rate(biggest) - win_rate(random)) / (win_rate(best) - win_rate(random)), no knocks; map wants it between 0 and 1 (about halfway).',
  race_duration:
    'Seconds from green to the decision (first picked drop at the seal, gulp, both out, or the 90 s cut).',
  still_racing_at_60s: 'Share of races not yet decided 60 s after green.',
  gulp_rate: 'Share of races ended by the two picked drops merging (gulp or gulp draw).',
};

export const TARGETS = {
  within_2s: { min: 0.25, source: 'map 1.2' },
  lead_swap_after_half: { min: 0.35, source: 'map 1.2' },
  median_gap_s: { max: 4, source: 'map 1.2' },
  knock_value_pp: { min: 5, max: 10, source: 'map 1.2, 3.4' },
  want_another_knock: { min: 0.25, source: 'map 1.2' },
  pick_value_pp: { min: 15, source: 'map 1.2, 3.5' },
  biggest_position: { min: 0, max: 1, source: 'map 1.2 ("a meta tra le due")' },
  median_duration_s: { min: 30, max: 40, source: 'map 11 step 3' },
  still_racing_at_60s: { max: 0.02, source: 'map 2.1, 11 step 3' },
  gulp_rate: { min: 0.03, max: 0.06, source: 'map 2.1' },
  attentive_win_rate: { min: 0.55, max: 0.6, source: 'map 3.5' },
};

function median(xs: number[]): number {
  const a = xs.filter((x) => Number.isFinite(x)).sort((u, v) => u - v);
  if (a.length === 0) return Number.NaN;
  const m = a.length >> 1;
  return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
}

function pct(xs: number[], q: number): number {
  const a = xs.filter((x) => Number.isFinite(x)).sort((u, v) => u - v);
  if (a.length === 0) return Number.NaN;
  return a[Math.min(a.length - 1, Math.floor(q * a.length))];
}

const r3 = (x: number) => Math.round(x * 1000) / 1000;
const ci = (p: number, n: number) => r3(1.96 * Math.sqrt(Math.max(p * (1 - p), 0) / Math.max(n, 1)));

function select(glasses: GlassRecord[], picker: PickerName, policy: KnockPolicyName): RaceRecord[] {
  return glasses.map((g) => {
    const r = g.races.find((x) => x.picker === picker && x.policy === policy);
    if (!r) throw new Error(`missing race ${picker}/${policy} in ${g.seed}`);
    return r;
  });
}

function comboStats(rs: RaceRecord[]) {
  const n = rs.length;
  const wins = rs.filter((r) => r.winner === 'player').length / n;
  const draws = rs.filter((r) => r.winner === 'draw').length / n;
  const within2 = rs.filter((r) => r.bothFinished && r.gap < 2).length / n;
  const within1 = rs.filter((r) => r.bothFinished && r.gap < 1).length / n;
  const within025 = rs.filter((r) => r.bothFinished && r.gap < 0.25).length / n;
  const swaps = rs.filter((r) => r.swapsAfterHalf > 0).length / n;
  const both = rs.filter((r) => r.bothFinished);
  const durations = rs.map((r) => r.decidedTime);
  const reasons: Record<string, number> = {};
  for (const r of rs) reasons[r.reason] = (reasons[r.reason] ?? 0) + 1 / n;
  for (const k of Object.keys(reasons)) reasons[k] = r3(reasons[k]);
  return {
    races: n,
    win_rate: r3(wins),
    win_rate_ci95: ci(wins, n),
    draw_rate: r3(draws),
    within_2s: r3(within2),
    within_2s_ci95: ci(within2, n),
    within_1s: r3(within1),
    photo_finish_025s: r3(within025),
    lead_swap_after_half: r3(swaps),
    median_gap_s: r3(median(both.map((r) => r.gap))),
    both_finished: r3(both.length / n),
    median_duration_s: r3(median(durations)),
    duration_p10_p90_s: [r3(pct(durations, 0.1)), r3(pct(durations, 0.9))],
    median_first_finish_s: r3(median(rs.filter((r) => r.firstFinishTime >= 0).map((r) => r.firstFinishTime))),
    still_racing_at_60s: r3(rs.filter((r) => r.decidedTime > 60).length / n),
    gulp_rate: r3(rs.filter((r) => r.gulp).length / n),
    slow_motion: r3(rs.filter((r) => r.slowMo).length / n),
    fast_forward: r3(rs.filter((r) => r.fastForward).length / n),
    knocks_used_mean: r3(rs.reduce((a, r) => a + r.knocksUsed, 0) / n),
    want_another_knock: r3(rs.filter((r) => r.wantedMore).length / n),
    rival_knocks_used_mean: r3(rs.reduce((a, r) => a + r.rivalKnocksUsed, 0) / n),
    result_reasons: reasons,
  };
}

function pairedDiff(a: RaceRecord[], b: RaceRecord[]) {
  const d = a.map((r, i) => (r.winner === 'player' ? 1 : 0) - (b[i].winner === 'player' ? 1 : 0));
  const n = d.length;
  const mean = d.reduce((x, y) => x + y, 0) / n;
  const sd = Math.sqrt(d.reduce((x, y) => x + (y - mean) * (y - mean), 0) / Math.max(n - 1, 1));
  return { pp: Math.round(mean * 1000) / 10, ci95_pp: Math.round((1.96 * sd * 1000) / Math.sqrt(n)) / 10 };
}

export function aggregate(glasses: GlassRecord[]) {
  const combos: Record<string, ReturnType<typeof comboStats>> = {};
  for (const picker of ['random', 'biggest', 'best'] as PickerName[]) {
    for (const policy of ['none', 'good'] as KnockPolicyName[])
      combos[`${picker}+${policy}`] = comboStats(select(glasses, picker, policy));
  }
  const ref = combos['best+good'];
  const knockValue = {
    best: pairedDiff(select(glasses, 'best', 'good'), select(glasses, 'best', 'none')),
    random: pairedDiff(select(glasses, 'random', 'good'), select(glasses, 'random', 'none')),
    biggest: pairedDiff(select(glasses, 'biggest', 'good'), select(glasses, 'biggest', 'none')),
  };
  const pickValue = pairedDiff(select(glasses, 'best', 'none'), select(glasses, 'random', 'none'));
  const wrR = combos['random+none'].win_rate;
  const wrB = combos['best+none'].win_rate;
  const wrG = combos['biggest+none'].win_rate;
  const biggestPos = wrB !== wrR ? r3((wrG - wrR) / (wrB - wrR)) : Number.NaN;

  // the glasses themselves (rollouts = what a bank would measure)
  const n = glasses.length;
  const shareMax = glasses.map((g) => Math.max(...g.rollouts.winShare));
  const accepted = glasses.filter((g) => {
    const ws = g.rollouts.winShare;
    const mt = g.rollouts.medianWinnerTime;
    return (
      Math.max(...ws) <= 0.3 &&
      ws.filter((w) => w >= 0.1).length >= 3 &&
      mt >= 28 &&
      mt <= 45 &&
      g.rollouts.pairClose2s >= 0.25
    );
  }).length;
  const byProfile: Record<string, { n: number; wins: number }> = {};
  const bySize = new Array(6).fill(0);
  for (const g of glasses) {
    g.rollouts.winShare.forEach((w, c) => {
      const p = g.rollouts.profiles[c];
      byProfile[p] ??= { n: 0, wins: 0 };
      byProfile[p].n++;
      byProfile[p].wins += w;
      bySize[g.rollouts.sizeRank[c]] += w / n;
    });
  }
  const kinds: Record<string, number> = {};
  for (const g of glasses) kinds[g.kind] = (kinds[g.kind] ?? 0) + 1;

  const measures = {
    tension: {
      within_2s: ref.within_2s,
      lead_swap_after_half: ref.lead_swap_after_half,
      median_gap_s: ref.median_gap_s,
      casual_player_random_none: {
        within_2s: combos['random+none'].within_2s,
        lead_swap_after_half: combos['random+none'].lead_swap_after_half,
        median_gap_s: combos['random+none'].median_gap_s,
      },
    },
    knock: {
      knock_value_pp_best: knockValue.best,
      knock_value_pp_random: knockValue.random,
      knock_value_pp_biggest: knockValue.biggest,
      want_another_knock: ref.want_another_knock,
    },
    pick: {
      pick_value_pp: pickValue,
      win_rate_no_knocks: { random: wrR, biggest: wrG, best: wrB },
      biggest_position: biggestPos,
    },
    pacing: {
      median_duration_s: ref.median_duration_s,
      duration_p10_p90_s: ref.duration_p10_p90_s,
      median_first_finish_s: ref.median_first_finish_s,
      still_racing_at_60s: ref.still_racing_at_60s,
      gulp_rate: ref.gulp_rate,
      gulp_rate_all_combos: r3(Object.values(combos).reduce((a, c) => a + c.gulp_rate, 0) / 6),
      slow_motion: ref.slow_motion,
      within_1s: ref.within_1s,
      photo_finish_025s: ref.photo_finish_025s,
    },
    rival_balance: { attentive_win_rate: ref.win_rate, ci95: ref.win_rate_ci95, draw_rate: ref.draw_rate },
  };

  const t = TARGETS;
  const check = (name: string, value: number, tgt: { min?: number; max?: number; source: string }) => ({
    measure: name,
    value,
    target: `${tgt.min !== undefined ? `>= ${tgt.min}` : ''}${tgt.min !== undefined && tgt.max !== undefined ? ' and ' : ''}${tgt.max !== undefined ? `<= ${tgt.max}` : ''}`,
    source: tgt.source,
    met: (tgt.min === undefined || value >= tgt.min) && (tgt.max === undefined || value <= tgt.max),
  });
  const verdicts = [
    check('tension: finishes within 2 s', ref.within_2s, t.within_2s),
    check('tension: lead swap after half', ref.lead_swap_after_half, t.lead_swap_after_half),
    check('tension: median gap (s)', ref.median_gap_s, t.median_gap_s),
    check('knock value, best reader (pp)', knockValue.best.pp, t.knock_value_pp),
    check('want another knock', ref.want_another_knock, t.want_another_knock),
    check('pick value (pp)', pickValue.pp, t.pick_value_pp),
    check('always-biggest between random and best', biggestPos, t.biggest_position),
    check('median race duration (s)', ref.median_duration_s, t.median_duration_s),
    check('still racing at 60 s', ref.still_racing_at_60s, t.still_racing_at_60s),
    check('gulp rate', ref.gulp_rate, t.gulp_rate),
    check('attentive player win rate vs rival', ref.win_rate, t.attentive_win_rate),
  ];

  return {
    measures,
    verdicts,
    combos,
    glasses: {
      count: n,
      kinds,
      generator_fallback: r3(glasses.filter((g) => g.genFallback).length / n),
      median_winner_time_s: r3(median(glasses.map((g) => g.rollouts.medianWinnerTime))),
      max_win_share_median: r3(median(shareMax)),
      pair_close_2s_mean: r3(glasses.reduce((a, g) => a + g.rollouts.pairClose2s, 0) / n),
      would_pass_bank_acceptance: r3(accepted / n),
      win_share_by_size_rank: bySize.map(r3),
      win_share_by_profile: Object.fromEntries(
        Object.entries(byProfile).map(([k, v]) => [k, r3(v.wins / v.n)]),
      ),
    },
  };
}
