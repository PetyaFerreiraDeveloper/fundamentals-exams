function pirate(input) {
    input = input.map(el => +el);
    
    let days = input.shift();
    let dailyPlunder = input.shift();
    let expectedTotalPlunder = input.shift();
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
            totalPlunder += 0.5 * dailyPlunder
        }
        if (i % 5 === 0) {
            totalPlunder -= 0.3 * totalPlunder;
        }
    }

    if (totalPlunder >= expectedTotalPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let perc = totalPlunder / expectedTotalPlunder * 100;
        console.log(`Collected only ${perc.toFixed(2)}% of the plunder.`);
    }
}

pirate(["10",
"20",
"380"])

