const Bicycle = require('./bicycle');
const ElectricBicycle = require('./electric-bicycle');
const Review = require('./review');
const Vehicle = require('./vehicle');

class Tester {

    constructor(name) {

        this.name = name;
        this.reviews = [];
        this.biketester = false;
        this.eBikeTester = false;

    }

    submitReview(vehicle, starRating, text) {

        if (vehicle.validate()) {
            var newReview = new Review(vehicle, this, starRating, text);
            newReview.addReview();
        } else throw new Error('Cannot submit review for invalid vehicle.');


        if (vehicle instanceof Bicycle) {
            this.bikeTester = true;
        } else this.bikeTester = false;

        if (vehicle instanceof ElectricBicycle) {
            this.eBikeTester = true;

        } else this.eBikeTester = false;

        return newReview;
    }


}

module.exports = Tester;
