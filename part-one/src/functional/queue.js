const Queue = function () {
  const someInstance = {};
  var count = 0;
  var seq = 0;
  // Use an object with numeric keys to store values
  const storage = {};
  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[seq] = value;
    seq++;
  };

  someInstance.dequeue = function () {
    let temp = Object.keys(storage).sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
    });

    let output = storage[temp[0]]

    for ( let key in storage){
      if(storage[key] === storage[temp[0]]){
        delete storage[key];
      }
    }
    return output;
  };

  someInstance.size = function () {
    for (let key in storage) {
      if (storage.hasOwnProperty(key)) {
        count++;
      }
    }
    return count
  };

  return someInstance;
};


if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  };
}

