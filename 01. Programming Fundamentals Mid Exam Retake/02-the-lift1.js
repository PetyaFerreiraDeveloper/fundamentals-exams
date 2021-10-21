function lift(arr) {
    let peopleWaiting = Number(arr.shift());
    let wagons = arr[0].split(' ');
    wagons = wagons.map(x => Number(x));
    console.log(wagons);
    if (wagons.length === 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(wagons.join(' '));
    } else {
        while (peopleWaiting > 0) {
            
        }
        for (let i = 0; i < wagons.length; i++) {

        }
    }
}

lift([
    "6",
    "4 4"
   ]
   
   )