function imit(input) {
    // take the message
    let msg = input.shift();
    // with a while loop through the rest and make a switch for the commands
    while (input[0] !== 'Decode') {
        let line = input.shift();
        let lineArr = line.split('|');
        let command = lineArr[0];
        switch (command) {
            case 'Move':
                let numLetters = Number(lineArr[1]);
                let firstPart = msg.substring(0, numLetters);
                let secondPart = msg.substring(numLetters);
                msg = secondPart + firstPart;
                break;
            case 'Insert': 
                let index = Number(lineArr[1]);
                let value = lineArr[2];
                let first = msg.substring(0, index);
                let last = msg.substring(index);
                msg = first + value + last;
                break;
            case 'ChangeAll':
                let toFind = lineArr[1];
                let toReplace = lineArr[2];
                while (msg.includes(toFind)) {
                    msg = msg.replace(toFind, toReplace)
                };
                break;
        }
    }
    console.log(`The decrypted message is: ${msg}`);
}

imit([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
)