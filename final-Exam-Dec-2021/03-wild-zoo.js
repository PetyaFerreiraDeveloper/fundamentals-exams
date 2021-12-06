function solve(input) {
    input.pop();
    let animalObj = {};
    let areaObj = {};
    let namesArr = [];
    for (let el of input) {
        let line = el.split(': ');
        let command = line[0];
        let info = line[1];
        let infoArr = info.split('-');
        let [name, food, area] = infoArr;
        namesArr = Object.entries(areaObj);
        if (command === 'Add') {
            if (!animalObj.hasOwnProperty(name)) {
                animalObj[name] = {
                    food: Number(food),
                    area: area
                }
            } else {
                animalObj[name].food += Number(food);
            }
            if (!areaObj.hasOwnProperty(area)) {
                areaObj[area] = [];
                areaObj[area].push(name);
            } else {
                if (areaObj[area].indexOf(name) === -1) {
                    areaObj[area].push(name);
                }
            }
        } else if (command === 'Feed') {
            if (animalObj.hasOwnProperty(name)) {
                animalObj[name].food -= Number(food);
                if (animalObj[name].food <= 0) {
                    console.log(`${name} was successfully fed`);
                    animalObj[name].food = 0;
                    //delete animalObj[name];
                   
                    for (let arr of namesArr) {
                        let areaName = arr[0];
                        let animalsArr = arr[1];
                        let animalIndex = animalsArr.indexOf(name);
                        if (animalIndex !== -1) {
                            animalsArr.splice(animalIndex, 1);
                        }
                        if (animalsArr.length === 0) {
                            let i = namesArr.indexOf(arr);
                            namesArr.splice(i, 1);
                        }
                    }
                }
            }
        }
    }

    let animalFinalArr = Object.entries(animalObj);
    animalFinalArr.sort((animalA, animalB) => {
        let animalAName = animalA[0];
        let animalBName = animalB[0];
        let animalAProp = animalA[1];
        let animalBProp = animalB[1];
        if (animalAProp.food !== animalBProp.food) {
            return animalBProp.food - animalAProp.food;
        } else {
            return animalAName.localeCompare(animalBName);
        }

    })
    console.log("Animals:");
    for (let el of animalFinalArr) {
        let name = el[0];
        let food = el[1].food;
        console.log(` ${name} -> ${food}g`);
    }

    namesArr.sort((areaA, areaB) => {
        let areaAName = areaA[0];
        let areaBName = areaB[0];
        let areaANum = areaA[1].length;
        let areaBNum = areaB[1].length;
        if (areaANum !== areaBNum) {
            return areaBNum - areaANum;
        } else {
            return areaAName.localeCompare(areaBName);
        }
    })

    console.log("Areas with hungry animals:");
    for (let el of namesArr) {
        let area = el[0];
        let num = el[1].length;
        if (num !== 0) {
            console.log(` ${area}: ${num}`);
        }
    }

}

solve(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"Feed: Maya-6570",
"Feed: Bobbie-6570",
"EndDay"])








