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
  // var i = this.children.length;
  this.children.push(tempTree);
}

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

// var myTree = Tree(1);
// myTree.addChild(5);
// myTree.addChild(6);
// myTree.children[0].addChild(7);
// myTree.children[1].addChild(8);
// console.log(myTree.contains(7), "=== true");
// console.log(myTree.contains(5), "=== true");
// console.log(myTree.contains(8), "=== true");
// console.log(myTree.contains(9), "=== false");
//console.log(myTree.contains(8), "=== true");
// console.log(myTree.contains(1), "=== true");

/*
 * Complexity: What is the time complexity of the above functions?
 * .contains ==> O(?) 재귀
 * .addChild ==> O(1)
 */

module.exports = Tree;
