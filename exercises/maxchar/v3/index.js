// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};

    // note how the string is being iterated upon
    for (let c of str) {
        if (!charMap[c]) {
            charMap[c] = 1;
        } else {
            charMap[c]++;
        }
    }

    let maxChar = '';
    let maxValue = 0;

    // note how the map is being iterated upon
    for (let c in charMap) {
        if (charMap[c] > maxValue) {
            maxValue = charMap[c];
            maxChar = c;
        }
    }

    return maxChar;
}

module.exports = maxChar;
