const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null; // fix me

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {};

treeMethods.contains = function(target) {};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Tree;
