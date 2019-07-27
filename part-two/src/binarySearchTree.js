const BinarySearchTree = function (value) {
  const BiTree = {
    value: value,
    left: undefined,
    right: undefined
  };

  BiTree.insert = function (value) {
    var newBi = BinarySearchTree();
    newBi.value = value;

   // console.log(newBi.value,"  ", this.value);

    if (this.left === undefined && newBi.value < this.value){
    //  console.log(value,"날 잡아먹음1",)
      this.left = newBi;
    } else if (this.right === undefined && newBi.value > this.value){
    //  console.log(value,"날 잡아먹음2")
      this.right = newBi;
    } else if (newBi.value < this.value){
     // console.log(value,"날 잡아먹음3")
      this.left.insert(value)
    } else if (newBi.value > this.value){
     // console.log(value,"날 잡아먹음4")
      this.right.insert(value)
    }

  };
  BiTree.contains = function (value) {

    // console.log(this.value ,"===",value)
    if (this.value === value){
      // console.log("컨텐츠1", this.value === value);
      return true

    } else if ( value < this.value && this.left !== undefined){
      // console.log("컨텐츠2");
      if(this.left.contains(value)){
        return true
      } else {
        return false
      }

    } else if ( value > this.value && this.right !== undefined){
      // console.log("컨텐츠3");
      if(this.right.contains(value)){
        return true
      }else {
        return false
      }

    } else {
      // console.log("컨텐츠4");
      return false;
    }
    // console.log("컨텐츠5");

  };
  BiTree.depthFirstLog = function (callback) {
    //function(value) {
    //  array.push(value);
    //};
<<<<<<< HEAD
    console.log(value,"네가 찾는 values")
    console.log("나는 누굴까.",callback)
    callback()
    if (this.left !== undefined){
      callback( this.left.depthFirstLog(callback) )
    }
    if (this.right !== undefined){
      callback ( this.right.depthFirstLog(callback) )
=======


    function getValues(node) {
        if(node.value) {
            callback(node.value);
            if (node.left) {
                getValues(node.left);
            }
            if (node.right) {
                getValues(node.right);
            }
        }
>>>>>>> 6110ee6fbebe333f975a35c7c2afefd51b342a98
    }
    getValues(this);


  };
  //
  // if (BiTree.root === null) {
  //   BiTree.root = BiTree;
  // }

  return BiTree;
};

var array = [];
var func = function(value) {
  array.push(value);
};
//console.log(func,"누구야 넌")

var myBi = BinarySearchTree(20);
myBi.insert(10);
myBi.insert(25);
myBi.insert(15);
myBi.depthFirstLog(func);
console.log(array);




console.log(myBi);
// console.log(array,"결과값");

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = BinarySearchTree;
