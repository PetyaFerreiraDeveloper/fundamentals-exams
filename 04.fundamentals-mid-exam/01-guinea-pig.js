function pig(input) {
    let purchasedFoodGrams = Number(input[0]) * 1000;
    let foodLeft = purchasedFoodGrams;
    let purchasedHayGrams = Number(input[1]) * 1000;
    let hayLeft = purchasedHayGrams;
    let purchasedCoverGrams = Number(input[2]) * 1000;
    let coverLeft = purchasedCoverGrams;
    let pigWeightGrams = Number(input[3]) * 1000;
    let bool = true;

    for (let i = 1; i <= 30; i++) {
        foodLeft = foodLeft - 300;
        if (foodLeft <= 0) {
            console.log("Merry must go to the pet store!");
            bool = false;
            break;
        }
        if (i % 2 === 0) {
            let givenHay = 0.05 * foodLeft;
            hayLeft = hayLeft - givenHay;
            if (hayLeft <= 0) {
                console.log("Merry must go to the pet store!");
                bool = false;
                break;
            }
        }
        if (i % 3 === 0) {
            let givenCover = pigWeightGrams / 3;
            coverLeft = coverLeft - givenCover;
            if (coverLeft <= 0) {
                console.log("Merry must go to the pet store!");
                bool = false;
                break;
            }
        }
    }
    if (bool) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodLeft / 1000).toFixed(2)}, Hay: ${(hayLeft / 1000).toFixed(2)}, Cover: ${(coverLeft / 1000).toFixed(2)}.`);
    }

}

pig(["9",
"5",
"5.2",
"1"])

