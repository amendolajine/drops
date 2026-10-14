// Every number the simulation uses, with its unit and its source.
// Units: mm, s, uL (= mm^3), uN, km/h for the car, m/s inside the wind formula.
// Sources:
//   R4 = research report R4_simulazione-gocce.md (section number in brackets)
//   MAP = production map drops_01_mappa-del-gioco.md v1.1 (section number in brackets)
//   TUNING = changed in the first tuning pass of the sim core (docs/JOURNAL.md, 2026-10-14), with the old value
//   CHOICE = engineering choice made while building the sim core, not in the sources (reason given)

export const SIM_VERSION = 1;

export const DEFAULT_PARAMS = {
  // ---------- glass ----------
  /** Glass width, mm. MAP 3.1, R4 1.1. */
  W: 240,
  /** Glass height, mm. MAP 3.1, R4 1.1. */
  H: 135,
  /** Finish line (rear seal), mm from the front edge. MAP 3.1, R4 3.10. */
  FINISH_X: 228,
  /** Simulation rate, ticks per second. MAP 9.3 rule 1, R4 3.2. */
  TICK_HZ: 60,
  /** Sim seconds before the pick, at 0 km/h, so the glass settles. R4 3.3 "pre-roll 2 s". */
  PREROLL_S: 2,

  // ---------- three forces (R4 1.2) ----------
  /** V = CAP_K a^3 for a 50 degree spherical cap. R4 3.10. */
  CAP_K: 0.785,
  /** Gravity: Fg = G a^3, uN/mm^3 (9.81 uN per uL x CAP_K). R4 1.2. */
  G: 7.7,
  /** Wind drag: Fw = CW k a^2 U^2, uN/(mm^2 (m/s)^2). Calibrated so a 20 uL drop follows the wind above 42 km/h. R4 1.2 (Andre 2019). */
  CW: 0.167,
  /** Pinning: Fpin = PPIN a m, uN/mm. 59.8 = clean glass, 130 = "dirty car glass" default. R4 1.2, 3.10. */
  PPIN: 130,
  /** A moving drop keeps going while |F| > DYN x Fpin (static vs dynamic threshold). R4 1.3 (Kaneda 1993). */
  DYN: 0.8,
  /** Tempo: v = KV (|F| - DYN Fpin) / a, mm/s. R4 1.4 (Le Grand 2005), tuned in R4 6.2 to a 35 s median. */
  KV: 0.1,
  /** Speed cap, mm/s. R4 3.10. */
  VMAX: 60,

  // ---------- pin field: the visible dirt (R4 1.3) ----------
  /** Dirt contrast: m = 1 + HET_AMP n, n in [-1, 1]. R4 3.10. */
  HET_AMP: 0.55,
  /** Noise octave sizes, mm. R4 1.3. */
  HET_SCALE1: 9,
  HET_SCALE2: 3.5,
  /** Weight of the large octave (the small one gets 1 - this). R4 6 prototype. */
  HET_W1: 0.7,
  /** One dirt speck per this many mm^2. R4 3.10 ("1 per 330 mm^2"). */
  SPECK_AREA: 330,
  /** Pinning multiplier inside a speck. R4 3.10. */
  SPECK_MUL: 2.4,
  SPECK_R_MIN: 1,
  SPECK_R_MAX: 2.5,
  /** Share of glasses with road-dirt smudges, and their pinning multiplier. MAP 3.3 event 25 (60%, +60%). */
  SMUDGE_CHANCE: 0.6,
  SMUDGE_MUL: 1.6,
  SMUDGE_R_MIN: 8,
  SMUDGE_R_MAX: 14,
  /** Share of glasses with a sticker (a solid disc drops go around). MAP 3.3 event 26 (30%). Radius: CHOICE. */
  STICKER_CHANCE: 0.3,
  STICKER_R_MIN: 5,
  STICKER_R_MAX: 7,

  // ---------- wet trails (R4 1.7) ----------
  /** Wet grid cell, mm. R4 1.7. */
  WET_CELL: 2,
  /** Pinning on a wet cell is multiplied by (1 - WET_K wet). R4 3.10; MAP 3.1 says "45% less". */
  WET_K: 0.45,
  /** Wet trail half-life, s. R4 3.10, MAP 14.2 (25 s, to review in playtests). */
  WET_HALF_LIFE: 25,
  /** Old wet streaks on a new glass ("earlier rain"). R4 3.3. Count range: CHOICE. */
  STREAKS_MIN: 2,
  STREAKS_MAX: 3,

  // ---------- meander (R4 1.3) ----------
  STEER_K: 0.9,
  STEER_MAX: 0.3,
  /** Probe distance ahead = a + STEER_AHEAD, mm. R4 1.3. */
  STEER_AHEAD: 1.5,

  // ---------- pearls (R4 1.7) ----------
  /** Shed pearls above this speed, mm/s, and above this volume, uL. R4 1.7 (Podgorski 2001). */
  SHED_V: 5,
  SHED_VMIN: 3,
  /** Pearl volume as a share of the drop. R4 1.7. */
  SHED_FRAC: 0.03,
  /** One pearl every (SHED_GAP_MIN + SHED_GAP_SPAN u) a of travel. R4 1.7 ("2.5a-4.5a"). */
  SHED_GAP_MIN: 2.5,
  SHED_GAP_SPAN: 2,
  /** A pearl does not merge back into its parent for this long, s. R4 3.7. */
  PEARL_IGNORE_S: 0.5,

  // ---------- merging (R4 1.6) ----------
  /** Merge when the centre distance < MERGE_K (a1 + a2). R4 3.10. */
  MERGE_K: 0.85,
  /** After a merge: pinning x BURST_MUL for BURST_S. R4 1.6. */
  BURST_S: 0.3,
  BURST_MUL: 0.6,
  /** Picked-pair gulp within this volume share is a draw. MAP 2.1. */
  GULP_DRAW: 0.05,

  // ---------- rain and ambient drops ----------
  /** Multiplier on the per-light rain rate (LIGHTS[light].rainPerS, R4 3.10: 8 impacts/s in Grey drive). CHOICE: 1. */
  RAIN_SCALE: 1,
  /** Rain drop volume: RAIN_V_MIN + RAIN_V_SPAN u^3, uL. R4 3.10. */
  RAIN_V_MIN: 0.15,
  RAIN_V_SPAN: 3.5,
  /** Ambient drops on a new glass. MAP 3.1 (120-150), R4 6.1 used 140. */
  AMBIENT_COUNT: 135,
  /** No ambient drop within this distance of a candidate, mm. R4 6 prototype (8 mm). */
  AMBIENT_CLEAR_R: 8,
  /** Fixed drop capacity (slots are recycled). R4 3.11 caps ambient drops at about 600. */
  MAX_DROPS: 1024,

  // ---------- candidates (MAP 3.1) ----------
  CAND_COUNT: 6,
  /** Start box, mm. MAP 3.1 (x 10-50, y 10-52; x 10-70 to be tried). */
  CAND_X_MIN: 10,
  CAND_X_MAX: 50,
  CAND_Y_MIN: 10,
  CAND_Y_MAX: 52,
  /** Candidate volume range, uL. MAP 3.1 (5.5-8.5 uL). */
  CAND_V_MIN: 5.5,
  CAND_V_MAX: 8.5,
  /** Minimum distance between candidates, mm. MAP 2.1 (20 mm proposed to cut gulps; prototype 17). */
  CAND_SPACING: 17,
  /** Bigger drops take the spots further back, ranked on x plus this much noise, mm. MAP 3.1 ("le partenze avanzate vanno a gocce piu piccole"). Noise: CHOICE. */
  CAND_X_JITTER: 10,
  /** "the monster" glass: volume of the big drop, uL. MAP 3.1 ("una goccia enorme"). Range: CHOICE. */
  MONSTER_V_MIN: 11,
  MONSTER_V_MAX: 13,
  /** Feeder drop upstream of an outsider: volume uL and distance mm. MAP 3.1 (gocce affluenti). Values: CHOICE. */
  FEEDER_V_MIN: 3.5,
  FEEDER_V_MAX: 5,
  FEEDER_DIST_MIN: 7,
  FEEDER_DIST_MAX: 11,

  // ---------- airflow (R4 1.10) ----------
  /** k(y) = FLOW_BASE + FLOW_TOP (1 - y/H): faster near the top. R4 1.10. */
  FLOW_BASE: 0.85,
  FLOW_TOP: 0.25,
  /** A-pillar swirl strength: tilt = FLOW_SWIRL (1 - x/W)(0.5 - y/H). R4 3.10. */
  FLOW_SWIRL: 0.12,

  // ---------- car (R4 3.3, 3.10; MAP 2.1) ----------
  /** Cruise speed and keyframe jitter, km/h, keyframes every CRUISE_KEY_S. R4 3.10 (65 +- 5 every 5 s). */
  CRUISE_KMH: 65,
  CRUISE_JITTER: 5,
  CRUISE_KEY_S: 5,
  /** Green light: 0 -> cruise in this many seconds. R4 3.3 (3-6 s). */
  ACCEL_S_MIN: 3,
  ACCEL_S_MAX: 6,
  /** Anti-stall: +30 km/h over 3 s at 50 s. MAP 2.1, R4 3.3. */
  ANTI_STALL_S: 50,
  ANTI_STALL_KMH: 30,
  ANTI_STALL_RAMP_S: 3,
  /** Hard end: the picked drop nearest the finish wins. MAP 2.1. */
  HARD_END_S: 90,

  // ---------- event schedule (MAP 3.3) ----------
  /** No event in the first 4 s after green. MAP 3.3. */
  EVENT_QUIET_S: 4,
  /** At least 6 s between event starts. MAP 3.3. */
  EVENT_GAP_S: 6,
  /** No event after 75% of the median race (prototype median 34 s; replace with the bank median). MAP 3.3, R4 6.3. */
  EVENT_CUTOFF_S: 25.5,
  /** At most 4 events per race. MAP 3.3. */
  EVENT_MAX: 4,
  /** Every event is announced at least this long before. MAP 3.3 rule 1. */
  WARN_S: 1,

  // bump (MAP 3.3 event 1; R4 1.9)
  BUMP_MUL: 0.6,
  BUMP_S: 0.3,
  /** Drops smaller than this hop 2-7 mm on a bump, uL. MAP 3.3 ("le piccole saltano di 2-7 mm"). Threshold: CHOICE. */
  BUMP_HOP_VMAX: 1.5,
  BUMP_HOP_MIN: 2,
  BUMP_HOP_MAX: 7,

  // braking (MAP 3.3 event 2: to 20 km/h or a stop for 2-8 s)
  BRAKE_KMH: 20,
  BRAKE_STOP_CHANCE: 0.3,
  BRAKE_HOLD_MIN: 2,
  BRAKE_HOLD_MAX: 8,
  /** Ramp down and back up, s. CHOICE. */
  BRAKE_DOWN_S: 1,
  BRAKE_UP_S: 2,

  // fly (MAP 3.3 event 16, 3.4)
  /** Creatures land only below this speed. MAP 3.3. */
  FLY_MAX_KMH: 30,
  /** Fly radius as an obstacle, mm (sprite 14x10 px at 2 px/mm). MAP 6 / R4 6.1 (3.5 mm). */
  FLY_R: 3.5,
  /** Fly stays this long at most, s. R4 6.1 (5-11 s). */
  FLY_LIFE_MIN: 5,
  FLY_LIFE_MAX: 11,
  /** Fly lets go when the car goes faster than its grip speed, km/h. MAP 3.3 ("un'accelerata le fanno mollare"). Range: CHOICE. */
  FLY_GRIP_MIN: 45,
  FLY_GRIP_MAX: 80,
  /** A drop touching a creature moves at this share of its speed (the fly "blocks for 1.5-3 s"). CHOICE. */
  CONTACT_SLOW: 0.35,

  // leaf / paper (MAP 3.3 event 24)
  LEAF_R_MIN: 9,
  LEAF_R_MAX: 12,
  LEAF_HOLD_MIN: 3,
  LEAF_HOLD_MAX: 8,
  /** Surfing leaf speed, mm/s. CHOICE. */
  LEAF_SURF_V: 18,
  /** Above this speed the thing that sticks is a piece of paper, not a leaf. MAP 3.3 (cosmetic). Value: CHOICE. */
  PAPER_KMH: 60,

  // downpour (MAP 3.3 event 11: rain x3 for 6 s, 1.5 s warning)
  DOWNPOUR_MUL: 3,
  DOWNPOUR_S: 6,
  DOWNPOUR_WARN_S: 1.5,

  // clearing / sun break (MAP 3.3 event 12: 6-10 s, small drops evaporate; R4 3.5 dV/dt = -c/a)
  CLEAR_MIN_S: 6,
  CLEAR_MAX_S: 10,
  CLEAR_WARN_S: 2,
  /** Evaporation constant c in dV/dt = -c / a, uL mm / s. CHOICE (a 0.3 uL droplet lasts about 2 s, a candidate loses about 10%). */
  EVAP_C: 0.12,
  /** Drops below this volume vanish, uL. CHOICE. */
  V_VANISH: 0.05,

  // lightning (storm only, cosmetic; MAP 3.3 event 13: at most 1 flash every 4 s)
  LIGHTNING_GAP_S: 4,

  // ---------- knock (MAP 3.4) ----------
  KNOCKS: 3,
  KNOCK_COOLDOWN_S: 1,
  /** Scare: nearest creature within 15 mm. MAP 3.4. */
  KNOCK_SCARE_R: 15,
  /** Jolt: nearest stuck drop within 10 mm, pinning x0.5 for 0.25 s. MAP 3.4, 3.2. */
  KNOCK_JOLT_R: 10,
  KNOCK_JOLT_MUL: 0.5,
  KNOCK_JOLT_S: 0.25,
  /** Scare chances. MAP 3.4 (fly 55-60% "to tune", leaf 50%). */
  SCARE_FLY: 0.58,
  SCARE_LEAF: 0.5,
  /** Pity (mercy) rule: +20 points per failed knock on the same creature; the third always works. MAP 3.4. */
  PITY_STEP: 0.2,
  PITY_SURE_AFTER: 2,
  /** Knock positions are rounded to 0.5 mm. MAP 3.4, 9.3 rule 6. */
  KNOCK_QUANT_MM: 0.5,
  /** Final straight: knocks lock when a picked drop passes this share of the path. MAP 2.1 phase 5. */
  FINAL_STRAIGHT: 0.85,

  // ---------- rival (MAP 3.5) ----------
  /** Loves big drops: a drop looks this many times bigger to him. MAP 3.5. */
  RIVAL_SIZE_LOVE: 1.5,
  /** Bonus for drops in his lucky corner (top third of the start area). MAP 3.5; weight: CHOICE, tuned. */
  RIVAL_CORNER_BONUS: 2.5,
  /** Penalty for drops near dirt (picky). MAP 3.5; weight: CHOICE, tuned. */
  RIVAL_DIRT_PENALTY: 2,
  /** Dirt counts as "near" when the pin field within this radius exceeds RIVAL_DIRT_LEVEL. CHOICE. */
  RIVAL_DIRT_R: 5,
  RIVAL_DIRT_LEVEL: 1.9,
  /** 1 time in 10 he points at a random drop. MAP 3.5. */
  RIVAL_WHIM: 0.1,
  /** Notices a threat within 35 mm ahead of his drop. MAP 3.5. */
  RIVAL_SEE_AHEAD: 35,
  /** Lateral tolerance of "ahead", mm. CHOICE. */
  RIVAL_SEE_SIDE: 12,
  /** Reacts after 0.8-1.6 s, knocks 3 times in 4. MAP 3.5. */
  RIVAL_REACT_MIN: 0.8,
  RIVAL_REACT_MAX: 1.6,
  RIVAL_KNOCK_P: 0.75,
  /** Jolts his drop when it has been stuck for more than 2 s. MAP 3.5. */
  RIVAL_STUCK_S: 2,
  /** 5% of his knocks land at a random spot. MAP 3.5. */
  RIVAL_RANDOM_KNOCK: 0.05,

  // ---------- director (MAP 2.1) ----------
  /** Fast-forward when the predicted gap stays above 6 s. MAP 2.1. */
  FF_GAP_S: 6,
  /** ... for this long before it latches, s. CHOICE (the prediction is noisy). */
  FF_HOLD_S: 2,
  /** ... and only once the leader has done this share of the path. CHOICE. */
  FF_MIN_PROGRESS: 0.5,
  /** Fast-forward when a picked drop goes out before 70% of the path. MAP 2.1. */
  FF_OUT_PROGRESS: 0.7,
  /** Slow motion when the predicted gap is under 1 s at the finish. MAP 2.1. */
  SLOWMO_GAP_S: 1,
  /** "Breath" (music) when the predicted gap is under 1.5 s, 1.5 s before the line. MAP 2.1 phase 5. */
  BREATH_GAP_S: 1.5,
  /** Time constant of the speed average used for the arrival forecast, s. CHOICE. */
  ETA_TAU_S: 1.5,
  /** Lead-swap hysteresis, mm. CHOICE (avoids counting jitter as swaps). */
  LEAD_HYST_MM: 1,
};

export type Params = { -readonly [K in keyof typeof DEFAULT_PARAMS]: number };
export type ParamOverrides = Partial<Params>;

export type Light = 'grey' | 'sunset' | 'storm';

/** Per-light event chances (per race) and rain. MAP 3.3 frequencies, mean about 2 events per race. */
export interface LightProfile {
  rainPerS: number;
  bump: number;
  brake: number;
  /** chance that a braking event brings a fly (it lands only under 30 km/h). MAP: fly in 45% of races with stops. */
  flyGivenBrake: number;
  leaf: number;
  downpour: number;
  clearing: number;
  /** lightning flashes per race (cosmetic) */
  lightning: number;
}

export const LIGHTS: Record<Light, LightProfile> = {
  // Grey drive: provincial road, drizzle. MAP 3.3 (bump 25-50%, braking 35% in town, leaf 10-15%).
  grey: {
    rainPerS: 8,
    bump: 0.55,
    brake: 0.45,
    flyGivenBrake: 0.6,
    leaf: 0.3,
    downpour: 0.2,
    clearing: 0.15,
    lightning: 0,
  },
  // Sunset after the storm: clearing 50%. MAP 3.3 event 12.
  sunset: {
    rainPerS: 5,
    bump: 0.5,
    brake: 0.45,
    flyGivenBrake: 0.6,
    leaf: 0.3,
    downpour: 0.1,
    clearing: 0.5,
    lightning: 0,
  },
  // Night storm: downpour 30%, lightning 40%. MAP 3.3 events 11, 13.
  storm: {
    rainPerS: 12,
    bump: 0.5,
    brake: 0.45,
    flyGivenBrake: 0.3,
    leaf: 0.2,
    downpour: 0.35,
    clearing: 0.05,
    lightning: 0.4,
  },
};
