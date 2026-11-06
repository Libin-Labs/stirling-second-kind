import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.equal(api.stirlingSecond(5, 2), 15n);
});
test('row normalization', () => {
  const bells = [1n, 1n, 2n, 5n, 15n, 52n, 203n, 877n];
  for (let n = 0; n < bells.length; n++) {
    let sum = 0n;
    for (let k = 0; k <= n; k++) sum += api.stirlingSecond(n, k);
    assert.equal(sum, bells[n]);
  }
});
test('empty convention', () => {
  assert.equal(api.stirlingSecond(0, 0), 1n);
});
test('outside support', () => {
  assert.equal(api.stirlingSecond(2, 3), 0n);
});
test('invalid parameters', () => {
  assert.throws(() => api.stirlingSecond(-1, 0));
  assert.throws(() => api.stirlingSecond(301, 1));
});
test('type contract', () => {
  assert.throws(() => api.stirlingSecond('5', 2));
});
