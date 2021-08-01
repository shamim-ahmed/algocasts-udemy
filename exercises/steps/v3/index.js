// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 1; i <= n; i++) {
        let str = compute('', n, i, 1);
        console.log(str);
    }
}

function compute(str, n, i, j) {
    if (j > n) {
        return str;
    }

    let tmp = '';

    if (j <= i) {
        tmp = str + '#';
    } else {
        tmp = str + ' ';
    }

    return compute(tmp, n, i, j + 1);
}

module.exports = steps;
