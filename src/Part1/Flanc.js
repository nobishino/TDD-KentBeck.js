class Flanc {
    constructor(amount) {
        this._amount = amount;
    }

    times(multiplier) {
        return new Flanc(this._amount * multiplier);
    }

    equals(flanc) {
        return this._amount === flanc._amount;
    }
}

module.exports = Flanc;