class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    if (this.size === 0) return null;

    let dequeueNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = dequeueNode.next;
    }
    this.size--;
    return dequeueNode;
  }

  peek() {
    if (this.size === 0) return null;

    return this.first.value;
  }

  isEmpty() {
    if (this.first) return true;

    return false;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
