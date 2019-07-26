const LinkedList = function () {
  const list = {};
  list.head = null;
  list.tail = null;

  if (list.head === null) {
    const initHead = Node();
    list.head = initHead
    list.next = list.head;
  }
  if (list.tail === null) {
    const initTail = Node();
    list.tail = initTail;
    list.tail.v = 1;
  }

  list.addToTail = function (value) {
    var newNode = Node(value);

    newNode.next = null;
    list.tail.next = newNode;
    list.tail.value = newNode.value;
    if (list.tail.next === null || list.head.next === null) {
      list.head.next = newNode;
      list.head.value = newNode.value;
      list.tail.next = newNode;
    }

  };

  list.removeHead = function () {
    const tempValue = list.head.next.value;
    const tempNext = list.head.next.next;
    delete list.head.next;
    list.head.next = tempNext;
    list.head.value = list.head.next.value;
    return tempValue;
  };
  
  list.contains = function (target) {
    var node = list.head
    while (1) {
      console.log(node);
      if (node.value === target) {
        return true;
      }
      node = node.next;
      console.log("1", node, list.tail)
      if (node === null) {
        return false;
      }
    }
  }

  return list;
}


const Node = function (value) {
  const node = {};

  node.value = value;
  node.next = null;

  // node.contains = function () {
  // if (node.value !== target && node.value !== undefined) {
  //   node.contains(target);
  // } else {
  //   return true;
  // }
  // if (node.next === node.tail && node.value === target) {
  //   return false;
  // }
  // };

  return node;
};


var myList = LinkedList();
myList.addToTail(4);   //테일이 없는 에러
myList.addToTail(3);
// console.log("myList: " ,myList, "myList.list: " , myList.list)
console.log(myList)
// myList.addToTail(3);
// console.log(myList);
myList.contains(3);