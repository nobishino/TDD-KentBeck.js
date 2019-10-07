describe(`Money`, () => {
    const chai = require('chai');
    const should = chai.should;
    const assert = chai.assert;
    should();
    const Dollar = require('../../src/chap01/Dollar');

    /* eslint-disable */
    describe(`Class Dollar`, () => {
    
        it(`$5 * 2 = $10`, () => {
            const five = new Dollar(5);
            five.times(2);
            assert.equal(10, five.amount);
        });
    
    });


});