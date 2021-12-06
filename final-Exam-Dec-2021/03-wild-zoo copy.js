function solve(input) {
    input.pop();
    // parse each command
    let animalObj = {};
    let areaObj = {};
    for (let el of input) {
        let line = el.split(': ');
        let command = line[0];
        let animalInfo = line[1];
        let animalLine = animalInfo.split('-');
        let [name, food, area] = animalLine;
        if (command === 'Add') {
            if (!animalObj.hasOwnProperty(name)) {
                animalObj[name] = {
                    food: Number(food),
                    area: area
                }
                if (!areaObj.hasOwnProperty(area)) {
                    areaObj[area] = [name];
                } else {
                    areaObj[area].push(name);
                }
            } else {
                animalObj[name].food += Number(food);
            }
        } else if (command === 'Feed') {
            if (animalObj.hasOwnProperty(name)) {
                animalObj[name].food -= Number(food);
                if (animalObj[name].food <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete animalObj[name];
                    let tuples = Object.entries(areaObj);
                    for (let el of tuples) {
                        let areaName = tuples[0];
                        let namesArray = tuples[1];
                        let index = namesArray.indexOf(name);
                        namesArray.splice(index, 1);
                    }
                    console.log(tuples);
                }
            }
        }
    }
    //console.log(animalObj);
    // console.log(areaObj);
}

solve(["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Add: hehe-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: hehe-4570",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])


