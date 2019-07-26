// eslint-disable-next-line func-names

var extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key]
  }
};

const Tree = function (value) {
  const newTree = {
    children: [],
    value: value
  };
  // newTree.value = value;
  //.children property, an array containing a number of subtrees
  // newTree.children = []; // fix me
  extend(newTree, treeMethods);
  return newTree;
};


const treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(value);
}

treeMethods.contains = function (target) {
  for (let i = 0; i < this.children.length; i++) {
    console.log(this.children[i],"돌아라")
    if (this.children[i] === target) {
      return true
    }
  }
  return false;
}

var myTree = Tree(10);
console.log(myTree);
myTree.addChild(8);
console.log(myTree)
myTree.addChild(10);
console.log(myTree)
myTree.addChild(12);
console.log(myTree);
console.log(myTree.contains(10), " === true");
console.log(myTree.contains(11), " === false");


/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Tree;
