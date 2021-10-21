function heart(input) {
    let houses = input.shift().split('@');
    houses = houses.map(el => +el);
    input.pop();
    let start = 0;
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ');
        let step = Number(currentRow[1]);
        let houseIndex = start + step;
        
        if (houseIndex >= houses.length) {
            houseIndex = 0;
            start = houseIndex;
            if (houses[houseIndex] === 0) {
                console.log(`Place ${houseIndex} already had Valentine's day.`)
            } else {
                houses[houseIndex] -= 2;
                if (houses[houseIndex] === 0) {
                    console.log(`Place ${houseIndex} has Valentine's day.`)
                }
            }
        } else {
            start = houseIndex;
            if (houses[houseIndex] === 0) {
                console.log(`Place ${houseIndex} already had Valentine's day.`)
            } else {
                houses[houseIndex] -= 2;
                if (houses[houseIndex] === 0) {
                    console.log(`Place ${houseIndex} has Valentine's day.`)
                }
            }
        }
    }
    console.log(`Cupid's last position was ${start}.`)
    for (let element of houses) {
        if (element !== 0) {
            count++;
        }
    }
    if (count === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }
}

heart(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love! "])


