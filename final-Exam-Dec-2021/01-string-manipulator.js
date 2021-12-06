function solve(input) {
    let str = input.shift();
    input.pop();
    for (let el of input) {
        let line = el.split(' ');
        let command = line[0];
        if (command === 'Translate') {
            let char = line[1];
            let replaceWith = line[2];
            str = str.split(char).join(replaceWith);
            console.log(str);
        } else if (command === 'Includes') {
            let check = line[1];
            if(str.includes(check)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Start') {
            let start = line[1];
            if (str.startsWith(start)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Lowercase') {
            str = str.toLowerCase();
            console.log(str);
        } else if (command === 'FindIndex') {
            let char = line[1];
            let last = str.lastIndexOf(char);
            console.log(last);
        } else if (command === 'Remove') {
            let start = Number(line[1]);
            let count = Number(line[2]);
            let firstPart = str.substring(0, start);
            let lastPart = str.substring(start + count);
            str = firstPart + lastPart
            console.log(str);
        }
    }
}

solve(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])


