function man(input) {
    let pirateShip = input.shift().split('>');
    let warship = input.shift().split('>');
    let maxHealth = Number(input.shift());
    input.pop();
    let bool = false;

    for(let i = 0; i < pirateShip.length; i++) {
        if (pirateShip[i] > maxHealth) {
            pirateShip[i] = maxHealth
        }
    }
    for(let i = 0; i < warship.length; i++) {
        if (warship[i] > maxHealth) {
            warship[i] = maxHealth
        }
    }
    
    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ');
        let command = currentRow[0];

        switch (command) {
            case 'Fire':
                let warshipSectionIndex = Number(currentRow[1]);
                let warshipDemage = Number(currentRow[2]);
                
                if (warshipSectionIndex >= 0 && warshipSectionIndex < warship.length) {
                    warship[warshipSectionIndex] -= warshipDemage;
                    if (warship[warshipSectionIndex] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        bool = true;
                        break;
                    }
                }
                break;
            case 'Defend':
                let startIndex = Number(currentRow[1]);
                let endIndex = Number(currentRow[2]);
                let damage = Number(currentRow[3]);
                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            bool = true;
                            break;
                        }
                    }
                }
                break;
            case 'Repair':
                let repairIndex = Number(currentRow[1]);
                let repairHealth = Number(currentRow[2]);
                if (repairIndex >= 0 && repairIndex < pirateShip.length) {
                    pirateShip[repairIndex] += repairHealth;
                    if (pirateShip[repairIndex] > maxHealth) {
                        pirateShip[repairIndex] = maxHealth;
                    }
                }
                break;
            case 'Status':
                let countSections = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    let sectionHealth = Number(pirateShip[i]);
                    if (sectionHealth < 0.2 * maxHealth) {
                        countSections++
                    }
                }
                console.log(`${countSections} sections need repair.`);
                break;

        }
        if (bool) {
            break;
        }
    }

    if (!bool) {
        let pirateShipSum = 0;
        let warshipSum = 0;
        for (let i = 0; i < pirateShip.length; i++) {
            let sectionPoints = Number(pirateShip[i]);
            pirateShipSum += sectionPoints;
        }
        for (let i = 0; i < warship.length; i++) {
            let sectionPoints = Number(warship[i]);
            warshipSum += sectionPoints;
        }
        console.log(`Pirate ship status: ${pirateShipSum}`)
        console.log(`Warship status: ${warshipSum}`)
    }
}

man(["22>20>20>15>18",
"6>7>2>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])



