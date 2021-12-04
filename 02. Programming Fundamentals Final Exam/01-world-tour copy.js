function world(input) {
    let tour = input.shift();
    input.pop();
    let length = input.length
    for (let i = 0; i < length; i++) {
        let commArr = input[i].split(':');
        let command = commArr[0];
        let token1 = commArr[1];
        let token2 = commArr[2];
        
        if (command == 'Add Stop') {
            let index = Number(token1);
            if (index >= 0 && index < tour.length) {
                let firstPart = tour.substring(0, index);
                let secondPart = tour.substring(index);
                tour = firstPart + token2 + secondPart;
            }
            console.log(tour);
        } else if (command == 'Remove Stop') {
            let startIndex = Number(token1);
            let endIndex = Number(token2);
            if (startIndex >= 0 && endIndex >= 0 && startIndex < tour.length && endIndex < tour.length) {
                let firstPart = tour.substring(0, startIndex);
                let final = tour.substring(endIndex + 1);
                tour = firstPart + final;
            }
            console.log(tour);
        } else if (command == 'Switch') {
            if (tour.includes(token1)) {
                tour = tour.split(token1).join(token2);
            } 
            console.log(tour);
        };
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}

world([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ]
  )