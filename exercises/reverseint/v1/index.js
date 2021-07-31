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
    var valueStr = Math.abs(n).toString();
    var resultStr = valueStr.split('').reverse().join('');
    var result = Number.parseInt(resultStr);

    if (n < 0) {
        result = -result;
    }

    return result;
}

module.exports = reverseInt;
