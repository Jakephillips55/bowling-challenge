class Bowling {
    constructor() {
        this.frames = {};
    }
    startGame() {
        for (let i = 1; i <= 10; i++) {
            this.frames["frame" + i] = new Frame;
        }
        ;
    }
}
;

