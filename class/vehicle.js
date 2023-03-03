
class Vehicle {
    constructor(modelName, year, price) {

        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = [];
    }

    storeReviews(review) {
        this.reviews.push(review);
        return;

    }

}


let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);

console.log(vehicle1)

let vehicle2 = new Vehicle("Trek 520", 2023, 1829);


module.exports = Vehicle;
