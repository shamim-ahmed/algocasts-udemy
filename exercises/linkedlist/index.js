// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    insertFirst(val) {
        let tmpNode = new Node(val, this.head);
        this.head = tmpNode;
        this.count++;
    }

    size() {
        return this.count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (this.count === 0) {
            return this.head;
        }

        let curNode = this.head;

        while (curNode.next != null) {
            curNode = curNode.next;
        }

        return curNode;
    }

    clear() {
        this.head = null;
        this.count = 0;
    }

    removeFirst() {
        if (this.count === 0) {
            return;
        }

        this.head = this.head.next;
        this.count--;
    }

    removeLast() {
        if (this.count === 0) {
            return;
        }

        if (this.count === 1) {
            this.head = null;
            this.count = 0;
            return;
        }

        let p = this.head;
        let q = this.head.next;

        while (q.next != null) {
            p = q;
            q = q.next;
        }

        p.next = null;
        this.count--;
    }

    insertLast(val) {
        if (this.count === 0) {
            this.insertFirst(val);
            return;
        }

        let p = this.head;
        let q = p.next;

        while (q != null) {
            p = q;
            q = q.next;
        }

        p.next = new Node(val);
        this.count++;
    }

    getAt(idx) {
        if (idx < 0 || idx >= this.count) {
            return null;
        }

        let k = 0;
        let p = this.head;

        while (k < idx) {
            p = p.next;
            k++;
        }

        return p;
    }

    removeAt(idx) {
        if (idx < 0 || idx >= this.count) {
            return;
        }

        if (idx === 0) {
            this.removeFirst();
            return;
        }

        let k = 0;
        let p = this.head;

        while (k < idx - 1) {
            p = p.next;
            k++;
        }

        p.next = p.next.next;
        this.count--;
    }

    insertAt(val, idx) {
        if (idx === 0) {
            this.insertFirst(val);
            return;
        }

        if (idx >= this.count) {
            this.insertLast(val);
            return;
        }

        let k = 0;
        let p = this.head;

        while (k < idx - 1) {
            p = p.next;
            k++;
        }

        let tmpNode = new Node(val, p.next);
        p.next = tmpNode;
        this.count++;
    }

    forEach(myFunc) {
        let p = this.head;

        while (p != null) {
            myFunc(p);
            p = p.next;
        }
    }

    *[Symbol.iterator]() {
        let p = this.head;

        while (p != null) {
            yield p;
            p = p.next;
        }
    }
}

module.exports = { Node, LinkedList };
