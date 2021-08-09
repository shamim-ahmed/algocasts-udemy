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
    const EMPTY_VALUE = 0;
    let resultArray = [];

    for (let i = 0; i < n; i++) {
        resultArray[i] = Array(n).fill(EMPTY_VALUE);
    }

    computeMatrix(resultArray, n, 0, 0, 1);

    return resultArray;
}

function computeMatrix(valueArray, n, row, column, val) {
    if (n <= 0) {
        return;
    }

    if (n === 1) {
        valueArray[row][column] = val;
        return;
    }

    let startRow = row;
    let startColumn = column;
    let endRow = startRow + n - 1;
    let endColumn = startColumn + n - 1;
    let count = val;

    for (let j = startColumn; j <= endColumn; j++) {
        valueArray[startRow][j] = count;
        count++;
    }

    startRow++;

    for (let i = startRow; i <= endRow; i++) {
        valueArray[i][endColumn] = count;
        count++;
    }

    endColumn--;

    for (let j = endColumn; j >= startColumn; j--) {
        valueArray[endRow][j] = count;
        count++;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
        valueArray[i][startColumn] = count;
        count++;
    }

    startColumn++;

    computeMatrix(valueArray, n - 2, startRow, startColumn, count);
}

module.exports = matrix;
