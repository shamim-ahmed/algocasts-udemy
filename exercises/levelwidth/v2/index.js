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

    let nodeArray = [root];
    const lengthArray = [];
    
    while (nodeArray.length > 0) {
        const n = nodeArray.length;
        lengthArray.push(n);

        for (let i = 0; i < n; i++) {
            const node = nodeArray.shift();
            nodeArray.push(...node.children);
        }
    }

    return lengthArray;
}

module.exports = levelWidth;
