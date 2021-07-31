// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var result = 0;
    var i = Math.abs(n);

    while (i > 0) {
        let r = i % 10;
        i = Math.floor(i / 10);
        result = 10 * result + r;
    }

    if (n < 0) {
        result = -result;
    }

    return result;
}

module.exports = reverseInt;
