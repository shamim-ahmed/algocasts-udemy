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
    compute('', n, 1, 1);
}

function compute(str, n, i, j) {
    if (i > n) {
        // we have covered all rows
        return;
    }

    if (j > n) {
        // we have covered all columns for current row
        console.log(str);
        // go to next row
        compute('', n, i + 1, 1);
        return;
    }

    let tmp = '';

    if (j <= i) {
        tmp = str + '#';
    } else {
        tmp = str + ' ';
    }

    // consider next column
    compute(tmp, n, i, j + 1);
}

module.exports = steps;
