// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, previous = null, next = null) {
        this.data = data;
        this.previous = previous;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    insertFirst(val) {
        if (this.isEmpty()) {
            let tmpNode = new Node(val);
            this.head = tmpNode;
            this.tail = tmpNode;   
        } else {
            let tmpNode = new Node(val, null, this.head);
            this.head.previous = tmpNode;
            this.head = tmpNode;
        }

        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    removeFirst() {
        if (this.isEmpty()) {
            return;
        }

        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        }

        this.count--;
    }

    removeLast() {
        if (this.isEmpty()) {
            return;
        }

        if (this.count === 1) {
            this.removeFirst();
            return;
        }

        this.tail = this.tail.previous;
        this.tail.next = null;
        this.count--;
    }

    insertLast(val) {
        if (this.isEmpty()) {
            this.insertFirst(val);
            return;
        }

        let tmpNode = new Node(val, this.tail);
        this.tail.next = tmpNode;
        this.tail = tmpNode;
        this.count++;
    }

    getAt(idx) {
        if (idx < 0 || idx >= this.count) {
            return null;
        }

        if (idx === 0) {
            return this.getFirst();
        }

        if (idx === this.count - 1) {
            return this.getLast();
        }

        let p = this.head;
        let k = 0;

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

        if (idx === this.count - 1) {
            this.removeLast();
            return;
        }

        let p = this.head;
        let k = 0;

        while (k < idx) {
            p = p.next;
            k++;
        } 

        p.previous.next = p.next;
        p.next.previous = p.previous;
        this.count--;
    }

    insertAt(val, idx) {
        if (idx < 0) {
            return;
        }

        if (idx === 0) {
            return this.insertFirst(val);
        }

        if (idx >= this.count) {
            this.insertLast(val);
            return;
        }

        let p = this.head;
        let k = 0;
        
        while (k < idx) {
            p = p.next;
            k++;
        }

        let tmpNode = new Node(val, p.previous, p);
        p.previous.next = tmpNode;
        p.next.previous = tmpNode;
        this.count++;
    }

    forEach(myFunc) {
        let p = this.head;

        while (p != null) {
            myFunc(p);
            p = p.next;
        }
    }

    *[Symbol.iterator] () {
        let p = this.head;

        while (p != null) {
            yield p;
            p = p.next;
        }
    }
}

module.exports = { Node, LinkedList };
