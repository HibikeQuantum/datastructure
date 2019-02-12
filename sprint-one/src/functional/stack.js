const Stack = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let count = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    count++;
  };

  someInstance.pop = function () {};

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
