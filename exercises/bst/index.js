// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    insert(key) {
        if (key < this.data) {
            if (this.left != null) {
                this.left.insert(key);
            } else {
                this.left = new Node(key);
            }
        } else if (key > this.data) {
            if (this.right != null) {
                this.right.insert(key);
            } else {
                this.right = new Node(key);
            }
        }
    }

    contains(key) {
        if (key === this.data) {
            return this;
        }

        if (key < this.data) {
            return this.left != null ? this.left.contains(key) : null;
        } 

        if (key > this.data) {
            return this.right != null ? this.right.contains(key) : null;
        }
    }
}

module.exports = Node;
