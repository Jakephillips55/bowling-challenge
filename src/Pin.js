class Pin {
    constructor(score) {
        this.score = score || 1;
        this.isHit = false;
    }
    hit() {
        this.isHit = true;
    }
}
;

