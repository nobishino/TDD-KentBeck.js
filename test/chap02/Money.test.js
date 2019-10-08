describe("Chapter 2", () => {
    const chai = require('chai');
    const should = chai.should;
    const assert = chai.assert;
    should();
    const Dollar = require('../../src/chap02/Dollar');
    describe(`Class Dollar`, () => {
        it(`$5 * 2 = $10 副作用を排除する`, () => {
            const five = new Dollar(5);
            let product = five.times(2);
            assert.equal(10, product.amount);
            product = five.times(3);
            assert.equal(15, product.amount);
        });

    });
});