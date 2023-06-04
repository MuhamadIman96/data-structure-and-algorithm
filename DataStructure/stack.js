class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return null;

    let popNode = this.last;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let currentNode = this.first;
      while (currentNode.next !== this.last) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.last = currentNode;
    }

    this.size--;
    return popNode;
  }

  peek() {
    if (this.size === 0) return null;
    return this.last.value;
  }

  isEmpty() {
    if (!this.first) return true;

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
