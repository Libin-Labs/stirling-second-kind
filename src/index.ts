function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
export function stirlingSecond(n: number, k: number): bigint {
  integer(n, 0, 300);
  integer(k, 0, 300);
  if (k > n) return 0n;
  const row = Array<bigint>(k + 1).fill(0n);
  row[0] = 1n;
  for (let i = 1; i <= n; i++) {
    for (let j = Math.min(i, k); j >= 1; j--) row[j] = BigInt(j) * row[j]! + row[j - 1]!;
    row[0] = 0n;
  }
  return row[k]!;
}
