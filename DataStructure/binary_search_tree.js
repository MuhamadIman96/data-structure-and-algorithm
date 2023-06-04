class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentRoot = this.root;

      while (true) {
        if (value === currentRoot.value) return undefined;
        else if (value < currentRoot.value) {
          if (!currentRoot.left) {
            currentRoot.left = newNode;
            return this;
          } else {
            currentRoot = currentRoot.left;
          }
        } else {
          if (!currentRoot.right) {
            currentRoot.right = newNode;
            return this;
          } else {
            currentRoot = currentRoot.right;
          }
        }
      }
    }
  }

  search(value) {
    if (!this.root) return null;
    let currentRoot = this.root,
      found = false;
    while (currentRoot && !found) {
      if (value < currentRoot.value) {
        currentRoot = currentRoot.left;
      } else if (value > currentRoot.value) {
        currentRoot = currentRoot.right;
      } else {
        found = true;
      }
    }
    if (!found) return null;

    return currentRoot;
  }
}
