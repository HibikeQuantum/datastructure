const Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count: 0
  };
  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key]
  }
};

const queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
}
queueMethods.dequeue = function () {
  var temp = Object.keys(this.storage).sort((a, b) => {
    if (a > b) {
      return 1
    } else {
      return -1
    }
  });

  let output = this.storage[temp[0]];
  for (let key in this.storage) {
    if (this.storage[key] === this.storage[temp]) {
      delete this.storage[key]
    }
  }
  this.count--;
  return output
};
queueMethods.size = function () {
  return this.count
}


if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
    queueMethods
  };
}
