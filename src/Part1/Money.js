class Money {
    constructor(amount) {
        this._amount = amount;
    }

    equals(money) {
        if (this.constructor.name !== money.constructor.name) return false;
        return this._amount === money._amount;
    }

}
module.exports = Money;