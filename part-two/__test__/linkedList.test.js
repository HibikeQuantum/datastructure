const LinkedList = require("../src/linkedList");

describe("linkedList", function() {
  let linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).toHaveProperty("head");
    expect(linkedList).toHaveProperty("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList).toHaveProperty("addToTail");
    expect(linkedList).toHaveProperty("removeHead");
    expect(linkedList).toHaveProperty("contains");
  });

  it("should designate a new tail when new nodes are added", function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).toEqual(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).toEqual(5);
  });

  it("should remove the head from the list when removeHead is called", function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).toEqual(4);
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(5);
  });

  it("should return the value of the former head when removeHead is called", function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).toEqual(4);
  });

  it("should contain a value that was added", function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).toEqual(true);
    expect(linkedList.contains(5)).toEqual(true);
    expect(linkedList.contains(6)).toEqual(false);
  });

  it("should not contain a value that was removed", function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).toEqual(false);
  });

  // add more tests here to test the functionality of linkedList
});
