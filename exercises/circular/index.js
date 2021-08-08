// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let data = [];
    let p = list.getFirst();
    let result = false;

    while (p != null) {
        if (data.indexOf(p) >= 0) {
            result = true;
            break;
        }

        data.push(p);
        p = p.next;
    }

    return result;
}

module.exports = circular;
