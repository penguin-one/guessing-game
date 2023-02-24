class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.arrRange = [];

        for (let i = min; i <= max; i++) {
            this.arrRange.push(i);
        }

        this.left = 0;
        this.right = this.arrRange.length - 1;
        this.mid;
    }

    guess() {
        this.mid = Math.round( (this.right + this.left) / 2 );

        return this.arrRange[this.mid];
    }

    lower() {
        this.right = this.mid;
    }

    greater() {
        this.left = this.mid;
    }
}

module.exports = GuessingGame;
