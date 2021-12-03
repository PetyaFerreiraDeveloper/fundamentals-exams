function astra(input) {
    let pattern = /([\#\|])([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1([1-9][0-9]?[0-9]?[0-9]?)\1/g;
    input = input[0];

    let valid = null;
    let obj = {};
    let calArr = [];
    let sumCalories = 0;
    while ((valid = pattern.exec(input)) !== null) {

        let food = valid[2];
        let date = valid[3];
        let calories = Number(valid[4]);
        calArr.push(calories);
        obj[food] = {
            date: date,
            calories: calories
        }
    }
    for (let el of calArr) {
        sumCalories += el;
    }
    let days = Math.floor(sumCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    //console.log(obj);
    let keys = Object.keys(obj);
    //console.log(keys);

    for (let i = 0; i < keys.length; i++) {
        let food = keys[i];
        console.log(`Item: ${keys[i]}, Best before: ${obj[food].date}, Nutrition: ${obj[food].calories}`);
    }

}

astra(["Hello|#Invalid food#19/03/20#450|$5*(@"])