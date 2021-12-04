function fancy(input) {
    input.shift();
    let pattern = /\@\#+([A-Z][A-Za-z0-9]{4,}[A-Z])\@\#+/;
    let digitPattern = /\d/g
    for (let el of input){
        let match = pattern.exec(el);
        if (!match) {
            console.log("Invalid barcode");
        } else {
            let productGroup = '';
            let numArr = el.match(digitPattern);
            if (numArr !== null) {
                productGroup = numArr.join('');
            } else {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        }
    }
}

fancy([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ]
  )