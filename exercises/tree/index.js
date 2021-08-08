// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }

    add(val) {
        this.children.push(new Node(val));
    }

    remove(val) {
        let idx = -1;

        for (let k = 0; k < this.children.length; k++) {
            if (this.children[k].data === val) {
                idx = k;
                break;
            }
        }

        if (idx >= 0) {
            this.children.splice(idx, 1);
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(func) {
        this.breadthFirst(this.root, func);
    }

    breadthFirst(node, func) {
        if (node === null) {
            return;
        }

        func(node);

        for (let child of node.children) {
            this.breadthFirst(child, func);
        }

    }

    traverseDF(func) {
        this.depthFirst(this.root, func);
    }

    depthFirst(node, func) {
        if (node === null) {
            return;
        }

        for (let child of node.children) {
            this.depthFirst(child, func);
        }

        func(node);
    }
}

module.exports = { Tree, Node };
