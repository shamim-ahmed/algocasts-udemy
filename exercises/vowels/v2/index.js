// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelArray = ['a', 'e', 'i', 'o', 'u'];
    let input = str.toLowerCase();
    let n = 0;

    for (let c of input) {
        if (vowelArray.includes(c)) {
            n++;
        }
    }

    return n;
}

module.exports = vowels;
