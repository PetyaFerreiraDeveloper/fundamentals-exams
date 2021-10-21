function counter(input) {
    let initialEnergy = +input.shift();
    let i = 0;
    let wins = 0;
    let bool = true;

    while (input[i] !== 'End of battle') {
        let distance = +input[i];
        if (initialEnergy < distance) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${initialEnergy} energy`);
            bool = false;
            break;
        } else {
            initialEnergy -= distance;
        }
        wins++;
        i++;
        if (wins % 3 === 0){
            initialEnergy += wins;
        }
        
    }
    if (bool) {
        console.log(`Won battles: ${wins}. Energy left: ${initialEnergy} `);
    }
    
}

counter((["200",
"54",
"14",
"28",
"13",
"End of battle"])
)
