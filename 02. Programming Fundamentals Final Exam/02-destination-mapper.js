function destination(input) {
    //let pattern = /([\=\/])([A-Z][A-Za-z][A-Za-z]+)\1/g;
    let pattern = /([\=\/])([A-Z][A-Za-z]{2,})\1/g
    let match;
    let destinations = [];
    while ((match = pattern.exec(input)) != null) {
        let destin = match[2];
        destinations.push(destin);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    let sum = 0;
    for (let el of destinations) {
        sum += el.length;
    }
    console.log(`Travel Points: ${sum}`);
}

destination('=Ha=Invalid/invalid==i5valid=/Isvalid/=i=')