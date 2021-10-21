function arr(input) {
    let arrIntegers = input.shift().split(' ');
    arrIntegers = arrIntegers.map(el => +el);
    input.pop();
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let currentElement = input[i].split(' ');
        let command = currentElement[0];
        let firstIndex = currentElement[1];
        let secondIndex = currentElement[2]

        switch (command) {
            case 'swap': 
                let firstNumber = arrIntegers[firstIndex];
                let secondNumber = arrIntegers[secondIndex];
                arrIntegers.splice(firstIndex, 1, secondNumber);
                arrIntegers.splice(secondIndex, 1, firstNumber);
                break;
            case 'multiply':
                let fNumber = arrIntegers[firstIndex];
                let sNumber = arrIntegers[secondIndex];
                let multiply = fNumber * sNumber;
                arrIntegers.splice(firstIndex, 1, multiply);
                break;
            case 'decrease':
                arrIntegers = arrIntegers.map(el => el - 1);
                break;
        }
    }

    console.log(arrIntegers.join(', '))
}

arr([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]  
)