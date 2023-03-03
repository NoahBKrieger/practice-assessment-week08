const Tester = require('./tester')
const Vehicle = require('./vehicle')


class Review {

    constructor(vehicle, tester, starRating, reviewText) {

        this.vehicle = vehicle.modelName;
        this.tester = tester.name;
        this.starRating = starRating;
        this.reviewText = reviewText;

    }
}

let tester1 = new Tester("Bob Jones");
let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
let review1 = new Review(vehicle1, tester1, 5, "Great car, excellent gas mileage!");

console.log(review1);

module.exports = Review;
