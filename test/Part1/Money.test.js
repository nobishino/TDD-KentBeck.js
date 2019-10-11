describe("Chapter 2", () => {
    const chai = require('chai');
    const should = chai.should;
    const assert = chai.assert;
    should();
    const Dollar = require('../../src/Part1/Dollar');
    const Flanc = require('../../src/Part1/Flanc');
    describe(`Class Dollar`, () => {
        it(`$5 * 2 = $10 副作用を排除する`, () => {
            const five = new Dollar(5);
            assert.isTrue(new Dollar(10).equals(five.times(2)));
            assert.isTrue(new Dollar(15).equals(five.times(3)));
        });

        it(`equals()`, () => {
            assert.isTrue(new Dollar(5).equals(new Dollar(5)));
            assert.isFalse(new Dollar(5).equals(new Dollar(6)));
        });
    });

    describe(`Class Flanc`, () => {
        it(`$5 * 2 = $10 副作用を排除する`, () => {
            const five = new Flanc(5);
            assert.isTrue(new Flanc(10).equals(five.times(2)));
            assert.isTrue(new Flanc(15).equals(five.times(3)));
        });
    });

});