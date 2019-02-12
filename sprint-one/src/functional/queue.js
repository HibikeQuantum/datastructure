const Queue = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {};

  someInstance.dequeue = function () {};

  someInstance.size = function () {};

  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  };
}
