
class Vehicle {
    constructor(modelName, year, price) {

        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = [];
    }

    storeReviews(reviewArg) {
        this.reviews.push(reviewArg);
        return;

    }

    validate() {

        if (this.modelName === undefined || this.year === undefined || this.price === undefined) {
            return false;
        } else if (this.year > 2100 || this.year < 1950) {
            return false;
        } else return true;
    }

    update(newModelName, newYear, price) {
        this.modelName = newModelName;

        if (newYear > 1950 && newYear < 2100) {
            this.year = newYear;
        } else throw new Error('Year must be between 1950 and 2100');

        if (price > 0) {
            this.price = price;
        } else throw new Error('Price must be greater than 0');
    }

    printDetails() {

        console.log((`The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`))
        return (`The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`)
    }

    findReviewByTester(testerArg) {

        let filtered = this.reviews.filter(review => review.tester.name === testerArg)
        return filtered[0];
    }

}

module.exports = Vehicle;
