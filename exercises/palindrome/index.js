// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    var charArray = str.split('');
    var result = true;

    for (var i = 0, j = charArray.length - 1; i < j; i++, j--) {
        if (charArray[i] != charArray[j]) {
            result = false;
            break;
        }
    }

    return result;
}


// function palindrome(str) {
//     var revStr = str.split('').reverse().join('');
//     return str === revStr;
// }

module.exports = palindrome;
