function need(input) {
    let num = input.shift();
    input.pop();
    let carsObj = {};
    let initArr = input.splice(0, num);
    for (let el of initArr) {
        let line = el.split('|');
        let [name, mileage, fuel] = line;
        carsObj[name] = {
            miles: Number(mileage),
            fuel: Number(fuel)
        }
    }
    for (let el of input) {
        let line = el.split(' : ');
        let [command, carName, token1, token2] = line;
        let currFuel = Number(carsObj[carName].fuel);
        let currMiles = Number(carsObj[carName].miles)
        if (command === 'Drive') {
            if (currFuel < Number(token2)) {
                console.log("Not enough fuel to make that ride");
            } else {
                carsObj[carName].miles += Number(token1);
                carsObj[carName].fuel -= Number(token2);
                console.log(`${carName} driven for ${token1} kilometers. ${token2} liters of fuel consumed.`);
                if (carsObj[carName].miles >= 100000) {
                    console.log(`Time to sell the ${carName}!`);
                    delete carsObj[carName];
                }
            }
        } else if (command === 'Refuel') {
            if ((currFuel + Number(token1)) > 75) {
                let charged = 75 - currFuel;
                carsObj[carName].fuel = 75;
                console.log(`${carName} refueled with ${charged} liters`);
            } else {
                carsObj[carName].fuel += Number(token1);
                console.log(`${carName} refueled with ${Number(token1)} liters`);
            }
        } else if (command === 'Revert') {
            carsObj[carName].miles -= Number(token1);
            if (carsObj[carName].miles < 10000) {
                carsObj[carName].miles = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${token1} kilometers`);
            }
        };
    };

    let carsArr = Object.entries(carsObj);

    carsArr.sort((carA, carB) => {
        let carAName = carA[0];
        let carBName = carB[0];
        let carAProp = carA[1];
        let carBProp = carB[1];
        if (carAProp.miles !== carBProp.miles) {
            return carBProp.miles - carAProp.miles;
        } else {
            return carAName.localeCompare(carBName);
        }
    })
    for (let car of carsArr) {
        let carName = car[0];
        let carProp = car[1];
        console.log(`${carName} -> Mileage: ${carProp.miles} kms, Fuel in the tank: ${carProp.fuel} lt.`);
    }
    
}

need([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
  )