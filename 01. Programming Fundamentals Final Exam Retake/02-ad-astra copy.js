function astra(input) {
    let pattern = /([\#\|])([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1([1-9][0-9]?[0-9]?[0-9]?)\1/g;
    input = input[0];

    let valid = null;
    let foodArr = [];
    let calArr = [];
    let dateArr = [];
    let sumCalories = 0;
    while ((valid = pattern.exec(input)) !== null) {

        let food = valid[2];
        let date = valid[3];
        let calories = Number(valid[4]);
        calArr.push(calories);
        foodArr.push(food);
        dateArr.push(date);
    }

    for (let el of calArr) {
        sumCalories += el;
    }
    let days = Math.floor(sumCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (let i = 0; i < foodArr.length; i++) {
        console.log(`Item: ${foodArr[i]}, Best before: ${dateArr[i]}, Nutrition: ${calArr[i]}`);
    }

}

astra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|)' ])