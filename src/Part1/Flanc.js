const Money = require('./Money');
class Flanc extends Money {
    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Flanc(this._amount * multiplier);
    }

}

module.exports = Flanc;