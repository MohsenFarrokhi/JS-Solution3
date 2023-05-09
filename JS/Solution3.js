const countCharacters = (input) => {
    const charArray = input.split('');
    // console.log(curArray);
    const charCounts = charArray.reduce((counts, char) => {
        counts[char] = (counts[char] || 0) + 1;
        return counts;
    }, {});
    // console.log(charCounts);
    for (const char in charCounts) {
        console.log(`${char} : ${charCounts[char]}`);
    }
}

countCharacters("hello world");