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
  var tempTree = Tree();
  tempTree["value"] = value;
  // var i = this.children.length;
  this.children.push(tempTree);
}

treeMethods.contains = function (target) {

  // var outcome = undefined
  // function recursion(target, body) {
  //   if (this.value === target) {
  //     console.log(this.value, "정답")
  //     return true
  //   } else {
  //     // console.log("돌아가는 트리가가진 아이의 수",this.children.length, this)
  //     body.forEach(function (child) {
  //       recursion(target);
  //     });
  //
  //     // for (let i = 0; i < this.children.length; i++) {
  //     //   console.log(i,"요청 로그");
  //     //   return this.children[i].contains(target)
  //     // }
  //   }
  // }
  // outcome = recursion(target,this.child);
  //
  // if (outcome === true){
  //   return true;
  // } else if (outcome === undefined) {
  //   return false;
  // }

  for (let i = 0; i < this.children.length; i++) {
    if (typeof this.children[i] === 'object') {
      console.log( this.children[i].value,"===", target)
      if (this.children[i].value === target) {
        return true;
      } else {
        this.children[i].contains(target);
      }
    }
  }
  console.log("나는 뉴구",this.value)
  return false;

}

var myTree = Tree(1);
myTree.addChild(5);
myTree.addChild(6);
myTree.children[0].addChild(7);
myTree.children[1].addChild(8);
// console.log(myTree.contains(7), "=== true");
console.log(myTree.contains(8), "=== true");
// console.log(myTree.contains(1), "=== true");
/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Tree;
