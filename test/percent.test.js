'use strict';
/* globals describe, it */

const assert = require('chai').assert;
const percent = require('../lib/percent');

describe('percent calculation', () => {
    it('calculates percentage covered and total', () => {
        const p = percent(1, 1);

        assert.equal(p, 100);
    });
    it('calculates percentage with enough precision to detect minor differences with large covered and total', () => {
        const p = percent(999998, 999999);

        assert.isBelow(p, 100);
    });
    it('returns 100 when total is 0', () => {
        const p = percent(5, 0);
        assert.equal(p, 100);
    });
});
