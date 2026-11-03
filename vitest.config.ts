import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.{ts,js}'],
    environment: 'node',
    maxWorkers: 2,
    testTimeout: 60_000,
  },
});
