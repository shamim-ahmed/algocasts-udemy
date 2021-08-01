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

function steps(n, row = 0, str = '') {
    if (row >= n) {
        return;
    }

    let column = str.length;

    if (column === n) {
        console.log(str);
        steps(n, row + 1);
        return;
    }

    let tmp = '';

    if (column <= row) {
        tmp = str + '#';    
    } else {
        tmp = str + ' ';
    }

    steps(n, row, tmp);
}

module.exports = steps;
