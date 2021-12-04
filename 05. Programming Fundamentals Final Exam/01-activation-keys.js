function active(input) {
    let key = input.shift();
    input.pop();
    for (let el of input) {
        let line = el.split('>>>');
        let command = line[0];
        if (command === 'Slice') {
            let firstIndex = Number(line[1]);
            let secondIndex = Number(line[2]);
            let firstPart = key.substring(0, firstIndex);
            let lastPart = key.substring(secondIndex);
            key = firstPart + lastPart;
            console.log(key);
        } else if (command === 'Flip') {
            let secondCommand = line[1];
            let firstIndex = Number(line[2]);
            let secondIndex = Number(line[3]);
            let firstPart = key.substring(0, firstIndex);
            let middle = key.substring(firstIndex, secondIndex);
            let lastPart = key.substring(secondIndex);
            if (secondCommand === 'Upper') {
                middle = middle.toUpperCase();
            } else if (secondCommand === 'Lower'){
                middle = middle.toLowerCase();
            }
            key = firstPart + middle + lastPart;
            console.log(key);
        } else if (command === 'Contains') {
            let substr = line[1];
            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log("Substring not found!");
            }
        };
    }
    console.log(`Your activation key is: ${key}`);
}

active([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ]
  )