// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// NOTE: This solution is not as efficient as the other ones
function anagrams(input1, input2) {
    const str1 = input1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const str2 = input2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

    return str1 === str2;
}

module.exports = anagrams;
