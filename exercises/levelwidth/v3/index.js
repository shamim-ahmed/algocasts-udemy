// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    if (root === null) {
        return []
    }

    const nodeArray = [root, 's'];
    const lengthArray = [0];
    
    while (nodeArray.length > 1) {
        const node = nodeArray.shift();

        if (node === 's') {
            lengthArray.push(0);
            nodeArray.push('s')
        } else {
            nodeArray.push(...node.children)
            lengthArray[lengthArray.length - 1]++;
        }
    }

    return lengthArray;
}

module.exports = levelWidth;
