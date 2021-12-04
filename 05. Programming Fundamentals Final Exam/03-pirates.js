function pirates(input) {
    let num = input.indexOf('Sail');
    let first = input.splice(0, num);
    input.shift();
    input.pop();
    let cityObj = {};
    for (let el of first) {
        let line = el.split('||');
        let [name, population, gold] = line;
        if (!cityObj.hasOwnProperty(name)) {
            cityObj[name] = {
                population: Number(population),
                gold: Number(gold)
            }
        } else {
            cityObj[name].population += Number(population);
            cityObj[name].gold += Number(gold);
        }
    }

    for (let el of input) {
        let line = el.split('=>');
        let [command, townName, token1, token2] = line;
        if (command === 'Plunder') {
            cityObj[townName].population -= Number(token1);
            cityObj[townName].gold -= Number(token2);
            console.log(`${townName} plundered! ${token2} gold stolen, ${token1} citizens killed.`);
            if (cityObj[townName].population <= 0 || cityObj[townName].gold <= 0) {
                console.log(`${townName} has been wiped off the map!`);
                delete cityObj[townName];
            }
        } else if (command === 'Prosper') {
            if (Number(token1 < 0)) {
                console.log("Gold added cannot be a negative number!" );
            } else {
                cityObj[townName].gold += Number(token1);
                console.log(`${token1} gold added to the city treasury. ${townName} now has ${cityObj[townName].gold} gold.`);
            }
        }
    }
    let townArr = Object.entries(cityObj);
    
    if (townArr.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${townArr.length} wealthy settlements to go to:`);
        townArr.sort((townA, townB) => {
            let townAName = townA[0];
            let townBName = townB[0];
            let townAProp = townA[1];
            let townBProp = townB[1];
            if (townAProp.gold !== townBProp.gold) {
                return townBProp.gold - townAProp.gold;
            } else {
                return townAName.localeCompare(townBName);
            }
        })
        for (let town of townArr) {
            let townName = town[0];
            let townProp = town[1];
            console.log(`${townName} -> Population: ${townProp.population} citizens, Gold: ${townProp.gold} kg`);
        }
    }
    
}

pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
  ]
  )