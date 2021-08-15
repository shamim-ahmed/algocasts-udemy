// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

    if (min !== null && node.data < min) {
        return false;
    } else if (max !== null && node.data > max) {
        return false;
    }

    if (node.left !== null && validate(node.left, min, node.data) === false) {
        return false;
    }

    if (node.right !== null && validate(node.right, node.data, max) === false) {
        return false;
    }

    return true;
}

module.exports = validate;
