const extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key]
  }
};

const Tree = function (value) {
  const newTree = {
    children: [],
    value: value
  };
  extend(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function (value) {
  var tempTree = Tree();
  tempTree["value"] = value;
  this.children.push(tempTree);
};

treeMethods.contains = function (target) {

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true
    } else {
      if (this.children[i].contains(target)) {
        return true
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .contains ==> O(?) 재귀
 * .addChild ==> O(1)
 */

module.exports = Tree;
