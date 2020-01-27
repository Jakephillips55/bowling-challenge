class Roll {
    constructor() {
        this.pins = [];
    }
    addPin(pin) {
        if (!pin.isHit)
            throw ("This pin was not knocked down in this roll");
        if (this.pins.length >= 10)
            throw ("This roll is already a strike");
        this.pins.push(pin);
    }
    score() {
        var total = 0;
        for (var i = 0; i < this.pins.length; i++) {
            total = total + this._selectPin(i).score;
        } ;
        return total;
    }
    _selectPin(number) {
        return this.pins[number];
    }
    isStrike() {
        if (this.pins.length >= 10)
            return true;
        else
            return false;
    }
    createRoll(pinQty, pinScore) {
        for (var i = 1; i <= pinQty; i++) {
            pin = new Pin(pinScore);
            pin.hit();
            this.addPin(pin);
        } ;
    }
};





