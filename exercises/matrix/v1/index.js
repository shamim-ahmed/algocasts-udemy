// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const RIGHT = 0;
    const DOWN = 1;
    const LEFT = 2;
    const UP = 3;
    const EMPTY_VALUE = 0;
    const CELL_COUNT = n * n;
    
    // initialize matrix
    const resultArray = [];

    for (let k = 0; k < n; k++) {
        resultArray[k] = Array(n).fill(EMPTY_VALUE);
    }

    let direction = RIGHT;
    let i = 0;
    let j = 0;

    for (let k = 1; k <= CELL_COUNT; k++) {
        resultArray[i][j] = k;

        if (direction === RIGHT) {
            if (j === n - 1 || resultArray[i][j + 1] != EMPTY_VALUE) {
                direction = DOWN;
                i++;
            } else {
                j++;
            }
        } else if (direction === DOWN) {
            if (i === n - 1 || resultArray[i + 1][j] != EMPTY_VALUE) {
                direction = LEFT;
                j--;
            } else {
                i++;
            }
        } else if (direction === LEFT) {
            if (j === 0 || resultArray[i][j - 1] != EMPTY_VALUE) {
                direction = UP;
                i--;
            } else {
                j--;
            }
        } else if (direction === UP) {
            if (i == 0 || resultArray[i - 1][j] != EMPTY_VALUE) {
                direction = RIGHT;
                j++;
            } else {
                i--;
            }
        }
    }

    return resultArray;
}

module.exports = matrix;
