function secret(input) {
    let secret = input.shift();
    input.pop();
    for (let el of input) {
        let arr = el.split(':|:');
        let [command, token1, token2] = arr;
        if (command === 'ChangeAll') {
            if (secret.includes(token1)) {
                secret = secret.split(token1).join(token2);
            }
            console.log(secret);
        } else if (command === 'Reverse') {
            if (secret.includes(token1)) {
                secret = secret.replace(token1, '');
                let tokenArr = token1.split('');
                let reversed = tokenArr.reverse().join('');
                secret = secret + reversed;
                console.log(secret);
            } else {
                console.log("error");
            }
        } else if (command === 'InsertSpace') {
            let firtsPart = secret.substring(0, token1);
            let lastPart = secret.substring(token1);
            secret = firtsPart + ' ' + lastPart;
            console.log(secret);
        }
    }
    console.log(`You have a new text message: ${secret}`);
}

secret([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  )