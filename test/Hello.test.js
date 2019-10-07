describe(`Class Hello`, () => {
    const chai = require('chai');
    const should = chai.should;
    const assert = chai.assert;
    should();
    const Hello = require('../src/Hello');

    it(`hello.speak()は文字列"Hello"を返す。`, () => {
        const hello = new Hello();
        hello.speak().should.equal("Hello");
    });

});