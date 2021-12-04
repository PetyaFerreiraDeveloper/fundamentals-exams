function world(input) {
    let tour = input.shift();
    while (input[0] != 'Travel') {
        let line = input.shift();
        let lineArr = line.split(':');
        let command = lineArr[0];
        switch (command) {
            case 'Add Stop':
                        let startIndex = Number(lineArr[1]);
                        let insertString = lineArr[2];
                        if (startIndex < tour.length && startIndex >= 0) {
                            let firstPart = tour.substring(0, startIndex);
                            let lastPart = tour.substring(startIndex);
                            tour = firstPart + insertString + lastPart;
                        }
                        console.log(tour);
                        break;
            case 'Remove Stop':
                        let start = Number(lineArr[1]);
                        let end = Number(lineArr[2]);
                        if (start < tour.length && start >= 0 && end < tour.length && end >= 0) {
                            let firstPart = tour.substring(0, start);
                            let final = tour.substring(end + 1);
                            tour = firstPart + final;
                        };
                        console.log(tour);
                        break;
            case 'Switch':
                        let oldStr = lineArr[1];
                        let newStr = lineArr[2];
                        if (tour.includes(oldStr)) {
                            tour = tour.split(oldStr).join(newStr);
                        } 
                        console.log(tour);
                        break;
        }
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);

}

world([
    'Hawai::Cyprys-Greece-Hawai',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ]
  )