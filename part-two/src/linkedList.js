//functional style
const LinkedList = function () {
  const list = {};
  list.head = Node();
  list.tail = Node();

  list.addToTail = function (value) {
    let newNode = Node(value);
    if (!list.head.value) {
      list.head = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function () {
    let temp = list.head.value;
    list.head = list.head.next;
    list.tail = list.tail.next;
    return temp;
  };

  list.contains = function (target) {
    let node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
}

const Node = function (value) {
  const node = {};
  node.value = value;
  node.next = null;

  return node;
};

module.exports = LinkedList;