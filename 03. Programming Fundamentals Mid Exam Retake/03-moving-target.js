function moving(input) {
    let sequence = input.shift().split(' ');
    input.pop();

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ');
        let command = currentRow[0];
        let index = Number(currentRow[1]);
        let value = Number(currentRow[2]);
        let currentTarget = Number(sequence[index]);

        switch (command) {
            case 'Shoot':
                if (index >= 0 && index < sequence.length) {
                    currentTarget -= value; 
                    sequence[index] = currentTarget;
                    if (currentTarget <= 0) {
                        sequence.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (index >= 0 && index < sequence.length) {
                    sequence.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!")
                }
                break;
            case 'Strike':
                let lowerBorder = index - value;
                let upperBorder = index + value;
                let elementsToRemove = value * 2 + 1
                if (lowerBorder < 0 || lowerBorder >= sequence.length || upperBorder < 0 || upperBorder >= sequence.length) {
                    console.log("Strike missed!");
                    continue;
                } else {
                    sequence.splice(lowerBorder, elementsToRemove);
                }
                break;
        }
    }

    console.log(sequence.join('|'));
}

moving(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 1 3",
"End"])


