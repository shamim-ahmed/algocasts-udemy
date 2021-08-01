// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let wordArray = str.split(' ');

    for (let i = 0; i < wordArray.length; i++) {
        let word = wordArray[i];
        
        if (word.length > 0) {
            wordArray[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
    }

    return wordArray.join(' ');
}

module.exports = capitalize;
