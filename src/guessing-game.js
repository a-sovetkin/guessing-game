class GuessingGame {

    constructor() {
        this.min;
        this.max;
        this.center;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.center = this.min + Math.round((this.max - this.min) / 2);
        return this.center;
    }

    lower() {
        this.max = this.center;
    }

    greater() {
        this.min = this.center;
    }
}

module.exports = GuessingGame;
