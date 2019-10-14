class Money {
    constructor(amount) {
        this._amount = amount;
    }

    equals(money) {
        if (this.constructor.name !== money.constructor.name) return false;
        return this._amount === money._amount;
    }

    static dollar(amount) {
        return new Dollar(amount);
    }

}

class Dollar extends Money {
    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier);
    }
}

class Flanc extends Money {
    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Flanc(this._amount * multiplier);
    }

}
module.exports = {
    Dollar: Dollar,
    Money: Money,
    Flanc: Flanc,
}
