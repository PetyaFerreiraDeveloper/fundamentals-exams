function piano(input) {
    // add the pieces into an obj
    let num = input.shift();
    input.pop();
    let list = input.slice(0, num);
    input = input.slice(num);
    let obj = {};
    for (let el of list) {
        let line = el.split('|');
        let [piece, composer, key] = line;
        obj[piece] = {
            composer: composer,
            key: key
        }
    }
    
    for (let el of input) {
        let line = el.split('|');
        let [command, piece] = line;
        switch (command) {
            case 'Add':
                    let composer = line[2];
                    let key = line[3];
                    if (obj.hasOwnProperty(piece)) {
                        console.log(`${piece} is already in the collection!`);
                    } else {
                        obj[piece] = {
                            composer: composer,
                            key: key
                        };
                        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                    };
                    break;
            case 'Remove':
                    if (obj.hasOwnProperty(piece)) {
                        console.log(`Successfully removed ${piece}!`);
                        delete obj[piece];
                    } else {
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    };
                    break;
            case 'ChangeKey': 
                        let newKey = line[2];
                        if (obj.hasOwnProperty(piece)) {
                            obj[piece].key = newKey;
                            console.log(`Changed the key of ${piece} to ${newKey}!`);
                        } else {
                            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                        }
                        break;
        }
    }
    let songsArr = Object.entries(obj);
    
    songsArr.sort((songA, songB) => {
        let songAName = songA[0];
        let songBName = songB[0];
        return songAName.localeCompare(songBName)
    })
    for (let el of songsArr) {
        let piece = el[0];
        let composer = el[1].composer;
        let key = el[1].key;

        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}

piano([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
  )