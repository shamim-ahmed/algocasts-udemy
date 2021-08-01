// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(input1, input2) {
    let str1 = input1.toLowerCase();
    let str2 = input2.toLowerCase();

    let charMap1 = getCharacterMap(str1);
    let charMap2 = getCharacterMap(str2);

    if (Object.keys(charMap1).length != Object.keys(charMap2).length) {
        return false;
    }

    let result = true;

    for (let c in charMap1) {
        let count1 = charMap1[c];
        let count2 = charMap2[c];

        if (count1 != count2) {
            result = false;
            break;
        }
    }

    return result;
}

function getCharacterMap(inputStr) {
    let resultMap = {};

    for (let i = 0; i < inputStr.length; i++) {
        let c = inputStr.charAt(i);
        let code = inputStr.charCodeAt(i);

        if (!isAlphaNumeric(code)) {
            continue;
        }

        let count = resultMap[c];

        if (!count) {
            count = 1;
        } else {
            count++;
        }

        resultMap[c] = count;
    }

    return resultMap;
}

function isAlphaNumeric(code) {
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }

    return true;
}

module.exports = anagrams;
