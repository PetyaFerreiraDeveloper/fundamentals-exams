function lift(arr) {
    let peopleWaiting = Number(arr.shift());
    if (arr[0].length === 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        //console.log(' ');
    } else {
        let wagons = arr[0].split(' ');
        wagons = wagons.map(x => +x)
    
        for (let i = 0; i < wagons.length; i++) {
            let currentWagon = wagons[i];
            if (currentWagon < 4) {
                if (peopleWaiting <= 4 - currentWagon) {
                    wagons.splice(i, 1, peopleWaiting);
                    peopleWaiting = 0;
                    break;
                } else if (peopleWaiting > 4 - currentWagon){
                    peopleWaiting -= 4 - currentWagon;
                    wagons.splice(i, 1, 4);
                }
            } else {
                continue;
            }
        }
        let emptySpaces = wagons.filter(element => element < 4);
        
        if (emptySpaces.length === 0) {
            if (peopleWaiting === 0) {
                console.log(wagons.join(' '));
            } else {
                console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
                console.log(wagons.join(' '));
            }
        } else {
            console.log('The lift has empty spots!');
            console.log(wagons.join(' '));
        }
    }
}

lift([
    "6",
    "4 4"
   ]
   
   )