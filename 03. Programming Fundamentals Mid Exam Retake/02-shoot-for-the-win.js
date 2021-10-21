function shoot(input) {
    let targets = input.shift();
    targets = targets.split(' ');
    targets = targets.map(el => +el);
    input.pop();
    input = input.map(el => +el);
  
    let count = 0;

    for(let i = 0; i < input.length; i++) {
        let currentIndex = input[i];
        let currentTarget = targets[currentIndex];

        if (currentTarget > -1) {
            targets[currentIndex] = -1;
            count++;
            for (let j = 0; j < targets.length; j++) {
                if (targets[j] > -1) {
                    if (targets[j] > currentTarget) {
                        targets[j] -= currentTarget
                    } else {
                        targets[j] += currentTarget
                    }
                } 
            }
        }
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`)
}

shoot(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

