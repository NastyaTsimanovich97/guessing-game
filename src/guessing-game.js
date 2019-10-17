class GuessingGame {
    constructor() {
        this.startIndex=0;
        this.endIndex=0;
        this.middle=0;
    }

    setRange(min, max) {
        this.startIndex=min; 
        this.endIndex=max;  
    }

    guess() {
        this.middle=Math.round(this.startIndex + (this.endIndex-this.startIndex)/2);
        return this.middle;
    }

    lower() {
        this.endIndex=this.middle;
    }

    greater() {
        this.startIndex=this.middle;
    }
}

module.exports = GuessingGame;
