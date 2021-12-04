function emoji(input) {
    input = input[0];
    let emojiPattern = /((?:\:\:)|(?:\*\*))([A-Z][a-z]{2,})\1/g;
    let digitPattern = /\d/g
    let digitMatch = input.match(digitPattern);
    let cool = 1;
    for (let el of digitMatch) {
        cool *= el;
    }
    console.log(`Cool threshold: ${cool}`);
    let match;
    let fullEmojiArr = [];
    let coolEmojiArr = [];
    while ((match = emojiPattern.exec(input)) !== null) {
        let fullEmoji = match[0];
        fullEmojiArr.push(fullEmoji);
    }
    console.log(`${fullEmojiArr.length} emojis found in the text. The cool ones are:`);
    
    for (let el of fullEmojiArr) {
        let word = el.substring(2, (el.length - 2));
        let sum = 0;
        for (let ch of word) {
            sum += ch.charCodeAt(0);
        }
        if (sum >= cool) {
            coolEmojiArr.push(el);
        }
    }
    for (let el of coolEmojiArr) {
        console.log(el);
    }

}

emoji(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]
  )
  