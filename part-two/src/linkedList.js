const LinkedList = function() {
  const list = {
  };
  list.head = null;
  list.tail = null;

  if (list.head===null) {
    const initHead = Node();
    list.head = initHead;
    list.next = list.head;
  }
  if (list.tail===null) {
    const initTail = Node();
    list.tail = initTail
  }

  list.addToTail = function(value) {
    var newNode = Node(value);
  
    newNode.next = list.tail;
    list.tail.next = newNode;

    if ( list.tail.next === null || list.head.next === null){
      list.head.next = newNode;
      list.tail.next = newNode;
    }
  };

  list.removeHead = function() {
    const tempValue = list.head.next.value;
    const tempNext = list.head.next.next;
    delete list.head.next;
    list.head.next = tempNext;
    return tempValue;
  };


const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;
  
  node.contains = function() {
    if (node.value !== target && node.value !== undefined) {
      node.contains(target);
    } else {
      return true;
    }
    if (node.next === node.tail && node.value === target) {
      return false;
    } 
  };
  return node;
};

// var myList = LinkedList();
// myList.addToTail(10);   //테일이 없는 에러
// // console.log("myList: " ,myList, "myList.list: " , myList.list)
// myList.addToTail(20);
// myList.removeHead();
// // console.log("myList: " ,myList, "myList.list: " , myList.list)
// myList.addToTail(30);
// myList.removeHead();    // 10이 지워짐.
// console.log(myList);
// myList.contains(5)  // false
// myList.contains(30)  // true;

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = LinkedList;