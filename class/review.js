const Tester = require('./tester');    // !! These cause Syntax ERROR of
const Vehicle = require('./vehicle');   //!! 'REVIEW IS NOT A CONSTRUCTOR'

class Review {

    constructor(vehicle, tester, starRating, text) {

        this.vehicle = vehicle;
        this.tester = tester;
        this.starRating = starRating;
        this.text = text;

    }

    addReview() {
        this.vehicle.reviews.push(this);
        this.tester.reviews.push(this);
    }

    static filterByStars(num, ...args) {

        let res = [];

        args.forEach(arg => {
            if (arg.starRating === num) {
                res.push(arg);
            }
        })

        return res;
    }
}

module.exports = Review;
