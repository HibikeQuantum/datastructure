const BinarySearchTree = require("../src/binarySearchTree");

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree).toHaveProperty("insert");
    expect(binarySearchTree).toHaveProperty("contains");
    expect(binarySearchTree).toHaveProperty("depthFirstLog");
  });

  it("should insert values at the correct location in the tree", function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).toEqual(3);
    expect(binarySearchTree.right.left.value).toEqual(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).toEqual(true);
    expect(binarySearchTree.contains(8)).toEqual(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) {
      array.push(value);
    };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).toEqual([5, 2, 3]);
  });
});
