// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((result, c) => c + result, '');
}

module.exports = reverse;

// solution 2
// function reverse(str) {
//     var result = '';

//     for (let c of str) {
//         result = c + result;
//     }

//     return result;
// }


// solution 1
// function reverse(str) {
//     var charArray = str.split('');
//     charArray = charArray.reverse();
//     return charArray.join('');
// }
