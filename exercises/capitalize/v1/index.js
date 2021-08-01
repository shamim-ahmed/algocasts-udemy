// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let charArray = str.split('');
    let wordBoundaryFlag = true;

    for (let i = 0; i < charArray.length; i++) {
        let c = charArray[i];

        if (c === ' ') {
            wordBoundaryFlag = true;
        } else {
            if (wordBoundaryFlag) {
                charArray[i] = c.toUpperCase();
                wordBoundaryFlag = false;
            }
        }
    }

    return charArray.join('');
}

module.exports = capitalize;
