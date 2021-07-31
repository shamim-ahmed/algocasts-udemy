// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let data = {};
    let maxChar = '';
    let maxValue = 0;

    for (let c of str) {
        data[c] = data[c] + 1 || 1;

        if (data[c] > maxValue) {
            maxValue = data[c];
            maxChar = c;
        }
    }

    return maxChar;
}

module.exports = maxChar;
