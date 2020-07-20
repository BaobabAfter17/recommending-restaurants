
class User {
    constructor(preference) {
        this.preference = preference ? preference : [5, 5, 5, 5, 5]; // suppose median number for each property is 5
    }

    like(restaurant) {
        this.changePreference(restaurant, 0.1); // 0.1 is arbitrary and should be optimized in future testing
    }

    dislike(restaurant) {
        this.changePreference(restaurant, -0.1);
    }

    // measures how similar a restaurant is compared with user's preference 
    similarity(restaurant) {
        return this.calcCosine(this.preference, restaurant);
        // 1. or should we measure similarity by distance between this.preference and restaurant?
        // 2. could refractor to make the number more meaningful
    }

    // private methods
    changePreference(delta, weight) {
        this.preference = this.preference.map((property, index) => {
            return property + delta[index] * weight
        });
    }

    calcCosine(vector1, vector2) {
        return this.multiple(vector1, vector2) / ( this.length(vector1) * this.length(vector2) );
    }

    multiple(vector1, vector2) {
        let result = 0;
        vector1.forEach((ele1, index) => {
            let ele2 = vector2[index];
            result += ele1 * ele2;
        });
        return result;
    }

    length(vector) {
        let sum = 0;
        vector.forEach(ele => {
            sum += ele ** 2;
        });
        return Math.sqrt(sum);
    }

    // distance(vector1, vector2) {
    //     let deltaVec = [];
    //     vector1.forEach((property1, index) => {
    //         let ele2 = vector2[index];
    //         let delta = property1 - ele2;
    //         deltaVec.push(delta);
    //     });
    //     return this.length(deltaVec);
    // }
}

// sample case
const arthur = new User();
const haidilao = [1, 0, 5, 4, 6];
const kfc = [9, 8, 0, 7, 3];
console.log(arthur.similarity(kfc));
arthur.like(kfc);
// similarity increases after user likes a restaurant
console.log(arthur.similarity(kfc));
arthur.dislike(kfc);
// similarity decrease after user dislike a restaurant
console.log(arthur.similarity(kfc));


