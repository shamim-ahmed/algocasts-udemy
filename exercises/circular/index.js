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
    let slow = list.getFirst();
    let fast = list.getFirst();

    if (slow == null) {
        return null;
    }

    let result = false;

    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            result = true;
            break;        
        }
    }

    return result;
}

module.exports = circular;
