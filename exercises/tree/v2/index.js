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
        if (this.root === null) {
            return;
        }

        const nodeArray = [];
        nodeArray.push(this.root);
        
        while(nodeArray.length > 0) {
            const node = nodeArray.shift();
            func(node);

            nodeArray.push(...node.children);
        }
    }

    traverseDF(func) {
        if (this.root === null) {
            return;
        }

        this.depthFirst(this.root, func);
    }

    depthFirst(node, func) {
        func(node);

        for (let child of node.children) {
            this.depthFirst(child, func);
        }
    }
}

module.exports = { Tree, Node };
