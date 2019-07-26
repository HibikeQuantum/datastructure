const LinkedList = function () {
  const list = {};
  list.head = Node();
  list.tail = Node();
	
  
  list.addToTail = function (value) {
    var newNode = Node(value);
	  if (!list.head.value) {
		  list.head = newNode;
    }
	  list.tail.next = newNode;
	  list.tail = newNode;
  };

  list.removeHead = function () {
	  var temp = list.head.value;
	  list.head = list.head.next;
	  list.tail = list.tail.next;
	  return temp;
  };
  
  list.contains = function (target) {
    var node = list.head;
	  while (node) {
		  if (node.value === target) {
		    return true;
      }
	  node = node.next;
    }
	  return false;
    
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
module.exports = LinkedList;
