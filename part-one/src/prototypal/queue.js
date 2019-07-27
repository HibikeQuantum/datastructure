const Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  return someInstance;
};

const queueMethods = {
  seq: 0,
  count: 0,
  storage: {}
};

queueMethods.enqueue = function (value) {
  this.storage[this.seq] = value;
  this.seq++;
  this.count++;
};

queueMethods.dequeue = function () {
  if (this.count > 0) {
    var temp = Object.keys(this.storage).sort((a, b) => {
      if (a > b) {
        return 1
      }
      if (a < b) {
        return -1
      }
    });

    let output = this.storage[temp[0]];

    for (let key in this.storage) {

      if (this.storage[key] === this.storage[temp[0]]) {
        delete this.storage[key]

      }
    }
    this.count--;
    return output
  }
};

queueMethods.size = function () {
  return this.count
};

module.exports = {
  Queue,
  queueMethods
};
