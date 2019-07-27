const Stack = function () {
  var someInstance = {
    seq: 0,
    count: 0,
    storage: {}
  };
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key]
  }
};

const stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.seq] = value;
  this.seq++;
  this.count++;
}

stackMethods.pop = function() {
  if (this.count > 0) {
    this.seq--;
    var output = this.storage[this.seq];
    delete this.storage[this.seq];
    this.count--;
    return output;
  }
}

stackMethods.size = function() {
  return this.count;
}

// var stack = Stack();
// stack.push("a");
// console.log(stack.pop());
// stack.push("b");
// console.log(stack.pop());


if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods
  };
}
