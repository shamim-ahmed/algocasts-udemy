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
    const resultArray = [];
    const EMPTY_VALUE = 0;

    for (let i = 0; i < n; i++) {
        resultArray[i] = Array(n).fill(EMPTY_VALUE);
    }

    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let count = 1;

    while (startRow <= endRow && startColumn <= endColumn) {
        // top row
        for (let j = startColumn; j <= endColumn; j++) {
            resultArray[startRow][j] = count;
            count++;
        }

        startRow++;

        // last column
        for (let i = startRow; i <= endRow; i++) {
            resultArray[i][endColumn] = count;
            count++;
        }

        endColumn--;

        // bottom row
        for (let j = endColumn; j >= startColumn; j--) {
            resultArray[endRow][j] = count;
            count++;
        }

        endRow--;

        // first column
        for (let i = endRow; i >= startRow; i--) {
            resultArray[i][startColumn] = count;
            count++;
        }

        startColumn++;
    }

    return resultArray;
}

module.exports = matrix;
