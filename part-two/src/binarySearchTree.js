//functional style
const BinarySearchTree = function (value) {
  const BiTree = {
    value: value,
    left: undefined,
    right: undefined
  };

  BiTree.insert = function (value) {
    let newBi = BinarySearchTree();
    newBi.value = value;

    if (this.left === undefined && newBi.value < this.value) {
      this.left = newBi;
    } else if (this.right === undefined && newBi.value > this.value) {
      this.right = newBi;
    } else if (newBi.value < this.value) {
      this.left.insert(value)
    } else if (newBi.value > this.value) {
      this.right.insert(value)
    }

  };

  BiTree.contains = function (value) {

    if (this.value === value) {
      return true
    } else if (value < this.value && this.left !== undefined) {
      return this.left.contains(value);
    } else if (value > this.value && this.right !== undefined) {
      return !!this.right.contains(value);
    } else {
      return false;
    }

  };
  BiTree.depthFirstLog = function (callback) {

    function getValues(node) {
      if (node.value) {
        callback(node.value);
        if (node.left) {
          getValues(node.left);
        }
        if (node.right) {
          getValues(node.right);
        }
      }
    }
    getValues(this);
  };

  return BiTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = BinarySearchTree;
