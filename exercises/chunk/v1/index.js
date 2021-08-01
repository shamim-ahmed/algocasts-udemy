// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let resultArray = [];
    let q = Math.floor(array.length / size);
    let r = array.length % size;

    for (let i = 0; i < q; i++) {
        let startIndex = i * size;
        let data = copyValues(array, startIndex, size);
        resultArray.push(data);
    }

    if (r > 0) {
        let startIndex = q * size;
        let data = copyValues(array, startIndex, r);
        resultArray.push(data);
    }

    return resultArray;
}

function copyValues(source, startIndex, count) {
    let data = [];

    for (let j = 0; j < count; j++) {
        data.push(source[startIndex + j]);
    }

    return data;
}

module.exports = chunk;
