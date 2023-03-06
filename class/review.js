//const Tester = require('./tester');
//const Vehicle = require('./vehicle');


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
