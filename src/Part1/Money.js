class Money {
    constructor(amount) {
        this._amount = amount;
    }

    equals(money) {
        return this._amount === money._amount;
    }

}
module.exports = Money;