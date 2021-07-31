// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let data = {};
    let maxChar = 0;
    let maxValue = 0;

    for (let c of str) {
        let n = data[c];

        if (!n) {
            n = 1;
        } else {
            n += 1;
        }

        data[c] = n;

        if (n > maxValue) {
            maxValue = n;
            maxChar = c;
        }
    }

    return maxChar;
}

module.exports = maxChar;
