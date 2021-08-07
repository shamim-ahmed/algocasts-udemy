// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
      this.data = [];
      this.startIndex = -1;
      this.endIndex = -1;
  }

  add(val) {
      if (this.startIndex === -1) {
          this.startIndex++;
      }

      this.endIndex++;
      this.data[this.endIndex] = val;
  }

  remove() {
      if (this.startIndex === -1) {
          return undefined;
      }

      let val = this.data[this.startIndex];
      this.data[this.startIndex] = undefined;
      this.startIndex++;

      if (this.startIndex > this.endIndex) {
          this.startIndex = -1;
          this.endIndex = -1;
      }
      
      return val;
  }

  peek() {
      if (this.startIndex === -1) {
          return undefined;
      }

      return this.data[this.startIndex];
  }
}

module.exports = Queue;
