function test(input) {
    for (let el of input) {
        let arr = el.split(' - ');
        console.log(arr);
    }
}

test(['Woodii - 10',
'Welwitschia - 7',
'Arnoldii - 3',
'Woodii - 5',
'Woodii - 5',
'Arnoldii'])