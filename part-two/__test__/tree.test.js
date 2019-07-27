const Tree = require("../src/tree");

describe("tree", function() {
  let tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree).toHaveProperty("addChild");
    expect(tree).toHaveProperty("contains");
    expect(tree).toHaveProperty("value");
  });

  it("should add children to the tree", function() {
    tree.addChild(5);
    expect(tree.children[0].value).toEqual(5);
  });

  it("should return true for a value that the tree contains", function() {
    tree.addChild(5);
    expect(tree.contains(5)).toEqual(true);
  });

  it("should return false for a value that was not added", function() {
    tree.addChild(5);
    expect(tree.contains(6)).toEqual(false);
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).toEqual(6);
  });

  it("should correctly detect nested children", function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).toEqual(true);
    expect(tree.contains(8)).toEqual(true);
  });
});
