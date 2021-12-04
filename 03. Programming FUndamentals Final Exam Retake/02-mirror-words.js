function mirror(input) {
    input = input[0];
    let pattern = /([\@\#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let match;
    let wordsArr = [];
    let mirrorWordsArr = [];
    let bool = false;
    while ((match = pattern.exec(input)) !== null) {    
        let {firstWord, secondWord} = match.groups;
        wordsArr.push(firstWord);
        let firstWordArr = firstWord.split('');
        let reversed = firstWordArr.reverse().join('');
        if (reversed === secondWord) {
            bool = true;
            mirrorWordsArr.push(`${firstWord} <=> ${secondWord}`)
        }
    }
    
    if (wordsArr.length !== 0) {
        console.log(`${wordsArr.length} word pairs found!`);
        if (bool) {
            console.log("The mirror words are:");
            console.log(mirrorWordsArr.join(', '));
        } else {
            console.log("No mirror words!");
        }
    } else {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    };
    
}

mirror([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    
    )