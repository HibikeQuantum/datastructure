const Stack = function () {
  const someInstance = {};
  const storage = {};
  // Use an object with numeric keys to store values
  let count = 0;
  let seq = 0;

  someInstance.push = function (value) {
    storage[seq] = value;
    seq++;
    count++;
  };

  someInstance.pop = function () {
    if (count > 0) {
      seq--;
      var out = storage[seq];
      delete storage[seq];
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