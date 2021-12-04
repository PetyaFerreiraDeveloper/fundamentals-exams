function password(input) {
    let pass = input.shift();
    input.pop();
    
    for (let el of input) {
        let line = el.split(' ');
        let [command, token1, token2] = line;
        if (command === 'TakeOdd') {
            let arr = [];
            for (let i = 0; i < pass.length; i++) {
                if (i % 2 !== 0) {
                    arr.push(pass[i]);
                }
            }
            pass = arr.join('');
            console.log(pass);
        } else if (command === 'Cut') {
            let firstPart = pass.substring(0, Number(token1));
            let lastPart = pass.substring(Number(token1) + Number(token2));
            pass = firstPart + lastPart;
            console.log(pass);
        } else if (command === 'Substitute') {
            if (pass.includes(token1)) {
                pass = pass.split(token1).join(token2);
                console.log(pass);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${pass}`);
}

password([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ]
  
  )