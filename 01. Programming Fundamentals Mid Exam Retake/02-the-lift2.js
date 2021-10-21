function lift(input) {
    let people = +input.shift();
    let cart = input[0].split(' ').map(Number);
    
    let sumOfPassangers = cart.reduce((a, b) => a + b);
    let capacity = cart.length * 4;
    let wagonNum = 0;
    let sumNewPeopleInWagon = 0;
    let isTrue = true;

    while (wagonNum < cart.length) {
        if (people > (capacity - sumOfPassangers) && isTrue) {
            console.log(`There isn't enough space! ${people - (capacity - sumOfPassangers)} people in a queue!`);
            isTrue = false; // so the loop doesn't enter this check any more. it will calculate the wagons from now on
        }
        if (people >= 4 - cart[wagonNum]) {
            sumNewPeopleInWagon = 4 - cart[wagonNum];
            cart[wagonNum] = 4;
            people -= sumNewPeopleInWagon;
        } else if (people !== 0) {
            cart[wagonNum] = people + cart[wagonNum];
            people = 0;
            console.log('The lift has empty spots!');
            break;
        } else {
            console.log("The lift has empty spots!");
            break;
        }
        wagonNum++;
    }

    console.log(cart.join(' '));
}

lift([
    "14",
    "0 0 0 1 0"
   ]
   )