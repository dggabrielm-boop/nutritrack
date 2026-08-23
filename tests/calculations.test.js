import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBmi } from '../src/domain/calculations.js';

test('calcula IMC a partir de peso y altura', () => {
  assert.equal(Math.round(calculateBmi(108, 179) * 10) / 10, 33.7);
});
