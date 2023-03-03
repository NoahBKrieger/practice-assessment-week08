const Vehicle = require("./vehicle");


class Bicycle extends Vehicle {
    constructor(name, year, price, style, frameSize, tireSize) {

        super(name, year, price)

        this.style = style;
        this.frameSize = frameSize;
        this.tireSize = tireSize;

    }

}

let bicycle = new Bicycle("Trek 520", 2023, 1829);

console.log(bicycle);

let bicycle2 = new Bicycle("Specialized", 2010, 600, "Touring", 18, 26);

console.log(bicycle2);

module.exports = Bicycle;
