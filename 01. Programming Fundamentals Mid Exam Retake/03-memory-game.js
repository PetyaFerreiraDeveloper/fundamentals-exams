function memory(input) {
    let sequence = input.shift();
    sequence = sequence.split(' ');
    input.pop(); // to remove the end
    let turnsCount = 0;
    let bool = true;
    

    for (let i = 0; i < input.length; i++) {
        turnsCount++;
        let pairIndexesArr = input[i].split(' ');
        pairIndexesArr = pairIndexesArr.sort((a, b) => a - b)
        let firstIndex = pairIndexesArr[0];
        let secondIndex = pairIndexesArr[1];
        if (firstIndex < 0 || secondIndex < 0 || firstIndex >= sequence.length || secondIndex >= sequence.length) {
            console.log("Invalid input! Adding additional elements to the board");
            let indexToAddAt = sequence.length / 2;
            let elementToAdd = '-' + turnsCount + 'a';
            sequence.splice(indexToAddAt, 0, elementToAdd, elementToAdd);
            continue;
        } 
        if (sequence[firstIndex] !== sequence[secondIndex]) {
            console.log("Try again!");
        } else {
            let removedElement = sequence.splice(firstIndex, 1);
            sequence.splice(secondIndex - 1, 1)
            console.log(`Congrats! You have found matching elements - ${removedElement}!`);
            if (sequence.length === 0) {
                console.log(`You have won in ${turnsCount} turns!`);
                bool = false;
                break;
            }
        }

    }

    if (bool) {
        console.log("Sorry you lose :(");
        console.log(sequence.join(' '));
    }
    
}

memory([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
       
    )