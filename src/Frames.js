class Frame {
    constructor() {
        this.rolls = [];
    }
    addRoll(roll) {
        if (this.rolls.length >= 2)
            throw ("This frame already has two rolls");
        this.rolls.push(roll);
    }
    score() {
        let total = 0;
        for (var i = 0; i < this.rolls.length; i++) {
            total = total + this._selectRoll(i).score();
        }
        ;
        return total;
    }
    totalPins() {
        let total = 0;
        for (let i = 0; i < this.rolls.length; i++) {
            total = total + this._selectRoll(i).pins.length;
        }
        ;
        return total;
    }
    _selectRoll(number) {
        return this.rolls[number];
    }
    isSpare() {
        return (this.totalPins() === 10);
    }
};





