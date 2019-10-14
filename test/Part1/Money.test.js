describe("Chapter 2", () => {
    const chai = require('chai');
    const should = chai.should;
    const assert = chai.assert;
    should();
    const MoneyJs = require('../../src/Part1/Money');
    const Money = MoneyJs.Money;
    const Dollar = MoneyJs.Dollar;
    const Flanc = MoneyJs.Flanc;
    // const Dollar = require('../../src/Part1/Dollar');
    // const Flanc = require('../../src/Part1/Flanc');
    describe(`Class Dollar`, () => {
        describe(`testMultiplication`, () => {

            it(`$5 * 2 = $10 副作用を排除する`, () => {
                const five = Money.dollar(5);
                assert.isTrue(Money.dollar(10).equals(five.times(2)));
                assert.isTrue(Money.dollar(15).equals(five.times(3)));
            });

        });

        describe(`testEquality`, () => {

            it(`test equality`, () => {
                assert.isTrue(Money.dollar(5).equals(Money.dollar(5)));
                assert.isFalse(Money.dollar(5).equals(Money.dollar(6)));
                assert.isTrue(Money.flanc(5).equals(Money.flanc(5)));
                assert.isFalse(Money.flanc(5).equals(Money.flanc(6)));
                assert.isFalse(Money.flanc(5).equals(Money.dollar(5)));
            });
        });


    });

    describe(`Class Flanc`, () => {
        describe(`testFlancMultiplication`, () => {

            it(`$5 * 2 = $10 副作用を排除する`, () => {
                const five = Money.flanc(5);
                assert.isTrue(Money.flanc(10).equals(five.times(2)));
                assert.isTrue(Money.flanc(15).equals(five.times(3)));
            });
        });

    });

});