const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(tree = null) {
    this.tree = tree;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addLeaf(this.tree, data);

    function addLeaf(tree, data) {
      if (!tree) {
        return new Node(data);
      }

      if (data < tree.data) {
        tree.left = addLeaf(tree.left, data)
      } else {
        tree.right = addLeaf(tree.right, data)
      }
      return tree;
    }
  }

  has(data) {
    if (!this.tree) {
      return false;
    }

    return hasLeaf(this.tree, data);

    function hasLeaf(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data > node.data) {
        return hasLeaf(node.right, data);
      } else {
        return hasLeaf(node.left, data);
      }
    }
  }

  find(data) {
    if (!this.tree) {
      return null;
    }

    return findLeaf(this.tree, data);

    function findLeaf(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findLeaf(node.right, data);
      } else {
        return findLeaf(node.left, data);
      }     
    }
  }

  remove(data) {}

  min() {    
    let tree = this.tree;
    while (tree.left) {
      tree = tree.left;
    }
    return tree.data;
  }

  max() {    
    let tree = this.tree;
    while (tree.right) {
      tree = tree.right;
    }
    return tree.data;
  }
}

module.exports = {
  BinarySearchTree
};