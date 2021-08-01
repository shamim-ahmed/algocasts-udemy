// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var charArray = str.split('');
    charArray = charArray.reverse();
    return charArray.join('');
}

module.exports = reverse;
