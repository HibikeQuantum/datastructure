const Stack = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let count = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function () {
    if (count > 0) {
      var out = storage[count];
      delete storage[count];
      count--;
      return out;
    }
  };

  someInstance.size = function () {
    return count;
  };

  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack
  };
}

var stack =  Stack ();
stack.push(1);
stack.pop();



