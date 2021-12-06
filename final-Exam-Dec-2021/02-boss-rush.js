function solve(input) {
    let num = input.shift();
    let pattern = /\|([A-Z]{4,})\|\:\#([A-Za-z]+\ [A-Za-z]+)\#/;
    let match;
    for (let el of input) {
        if ((match = el.match(pattern)) !== null) {
            let name = match[1];
            let title = match[2];
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}

solve([
    '3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
  ])