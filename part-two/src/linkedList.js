const LinkedList = function() {
  const list = {
  };
  list.head = null;
  list.tail = null;

  if (list.head===null) {
    const initHead = Node();
    list.head = initHead;
  }
  if (list.tail===null) {
    const initTail = Node();
    list.tail = initTail
  }

  list.addToTail = function(value) {
    const newNode = Node(value);
    newNode.next = list.tail;

    if ( list.tail.next === null || list.head.next === null){
      list.head.next = newNode;
      list.tail.next = newNode.value;
    }
  };

  list.removeHead = function() {
    const tempValue = list.head.value;
    const tempNext = list.head.next;
    delete list.next;
    list.head.next = tempNext;
    return tempValue;
  };

  list.contains = function(target){

    if (list.value !== target){
      list.contains(target)
    } else {
      return true;
    }
    if (list.next === list.tail && list.value === target){
      return false;
    }
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

var myList = LinkedList();
myList.addToTail(10);   //테일이 없는 에러
// console.log("myList: " ,myList, "myList.list: " , myList.list)
myList.addToTail(20);
// console.log("myList: " ,myList, "myList.list: " , myList.list)
// myList.removeHead();    // 10이 지워짐.
// myList.contains(5)  // false
// myList.contains(10)  // true;

/*
 * Complexity: What is the time complexity of the above functions?
 */
// module.exports = LinkedList;
