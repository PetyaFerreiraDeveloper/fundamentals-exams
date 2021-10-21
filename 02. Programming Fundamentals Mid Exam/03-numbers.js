function num(input) {
    let inputArr = input.split(' ');
    inputArr = inputArr.map(el => +el);
    inputArr.sort((a, b) => b - a);
    let average = inputArr.reduce((a, b) => a + b) / inputArr.length;
    let filteredArr = inputArr.filter(el => el > average)

    if (filteredArr.length === 0) {
        console.log('No')
    } else {
        let finalArr = filteredArr.splice(0, 5)
        console.log(finalArr.join(' '));
    }
    
}

num('10 20 30 40 50')