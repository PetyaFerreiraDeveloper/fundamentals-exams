function plant(input) {
    let num = input.shift();
    input.pop();
    let firstArr = input.splice(0, num);
    let plantsObj = {};

    for (let el of firstArr) {
        let plants = el.split('<->');
        let name = plants[0];
        let rarity = Number(plants[1]);
        plantsObj[name] = {
            rarity: rarity,
            rating: []
        }
    };
    for (let el of input) {
        let line = el.split(': ');
        let command = line[0];
        let arr = line[1].split(' - ');
        let currPlant = arr[0];
        let currNum = Number(arr[1])
        if (command === 'Rate') {
            if (plantsObj.hasOwnProperty(currPlant)) {
                plantsObj[currPlant].rating.push(currNum);
            } else {
                console.log("error");
            }
        } else if (command === 'Update') {
            if (plantsObj.hasOwnProperty(currPlant)) {
                plantsObj[currPlant].rarity = currNum;
            } else {
                console.log("error");
            }
        } else if (command === 'Reset') {
            if (plantsObj.hasOwnProperty(currPlant)) {
                plantsObj[currPlant].rating = [];
            } else {
                console.log("error");
            }
        }
    }
   
    console.log("Plants for the exhibition:");
    let plantsArr = Object.entries(plantsObj);
    for (let el of plantsArr) {
        let plantName = el[0];
        let avgRating;
        let ratingArr = plantsObj[plantName].rating;
        
        if (ratingArr.length === 0) {
            avgRating = 0;
        } else {
            let sum = 0;
            for (let el of ratingArr) {
                sum += Number(el);
            }
            avgRating = (sum / ratingArr.length);
        }
        plantsObj[plantName].rating = Number(avgRating);
    }
    
    plantsArr.sort((plantA, plantB) => {
        let plantAProp = plantA[1];
        let plantBProp = plantB[1];
        if (plantAProp.rarity !== plantBProp.rarity) {
            return plantBProp.rarity - plantAProp.rarity
        } else {
            return plantBProp.rating - plantAProp.rating
        }
    })

    for (let el of plantsArr) {
        let plant = el[0];
        let plantProp = el[1];
        console.log(`- ${plant}; Rarity: ${plantProp.rarity}; Rating: ${plantProp.rating.toFixed(2)}`);
    }
}

plant([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
  ]
  
  )