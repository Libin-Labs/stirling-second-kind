import { stirlingSecond } from '@lp-labs/stirling-second-kind';
if (stirlingSecond(5, 2) !== 15n) throw new Error('Count');
// @ts-expect-error invalid argument must be rejected by declarations
stirlingSecond('5', 2);
