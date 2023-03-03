const Bicycle = require("./bicycle");


class ElectricBicycle extends Bicycle {
    constructor(name, year, price, style, frameSize, tireSize, range, maxSpeed) {

        super(name, year, price, style, frameSize, tireSize)

        this.range = range;
        this.maxSpeed = maxSpeed;
    }
}

module.exports = ElectricBicycle;
