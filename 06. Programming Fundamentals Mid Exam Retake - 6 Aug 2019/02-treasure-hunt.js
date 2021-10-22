function treasure(input) {
    let currentTreasure = input.shift().split('|');
    input.pop();
    let sumItemsLength = 0;

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ');
        let command = currentRow.shift();
        
        switch (command) {
            case 'Loot':
                for (let i = 0; i < currentRow.length; i++) {
                    let currentItem = currentRow[i];
                    if (!currentTreasure.includes(currentItem)) {
                        currentTreasure.unshift(currentItem)
                    }
                }
                break;
            case 'Drop':
                let itemIndex = Number(currentRow[0]);
                if (itemIndex >= 0 && itemIndex < currentTreasure.length) {
                    let removedLoot = currentTreasure.splice(itemIndex, 1);
                    removedLoot = removedLoot[0];
                    currentTreasure.push(removedLoot);
                }
                break;
            case 'Steal':
                let count = Number(currentRow[0]);
                let indexFrom = currentTreasure.length - count;
                if (indexFrom < 0) {
                    indexFrom = 0;
                }
                let stolenLoot = currentTreasure.splice(indexFrom, count);
                console.log(stolenLoot.join(', '));
                break;
        }
    }

    if (currentTreasure.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        for (let i = 0; i < currentTreasure.length; i++) {
            let currentItem = currentTreasure[i];
            let currentItemL = currentItem.length;
            sumItemsLength += currentItemL
        }
        let result = sumItemsLength / currentTreasure.length
        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`)
    }
}

treasure(["Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

