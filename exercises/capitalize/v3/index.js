// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let data = str.split('');
    data[0] = data[0].toUpperCase();

    for (let i = 1; i < data.length; i++) {
        if (data[i - 1] === ' ') {
            data[i] = data[i].toUpperCase();
        }
    }

    return data.join('');
}

module.exports = capitalize;
