// worker_threads entry: runs the glasses it is given and posts one record per glass.
import { parentPort, workerData } from 'node:worker_threads';
import { type ExperimentConfig, runGlass } from './experiment.ts';

const { indices, cfg } = workerData as { indices: number[]; cfg: ExperimentConfig };
for (const i of indices) parentPort?.postMessage(runGlass(i, cfg));
