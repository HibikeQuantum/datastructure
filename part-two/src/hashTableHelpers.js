/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */

// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi')
//   limitedArray.get(3) // returns 'hi'

const LimitedArray = function(limit) {

  const limitedArray = {};
  limitedArray.storage = Array (limit);
  limitedArray.get = function(index) {
    checkLimit(index);
    return limitedArray.storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    limitedArray.storage[index] = value;
  };
  limitedArray.each = function(callback) {
    // eslint-disable-next-line no-undef
    for (let i = 0; i < storage.length; i++) {
      // eslint-disable-next-line no-undef
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== "number") {
      throw new Error("setter requires a numeric index for its first argument");
    }
    if (limit <= index) {
      throw new Error("Error trying to access an over-the-limit index");
    }
  };

  return limitedArray;
};


// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
const getIndexBelowMaxForKey = function(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash &= hash; // Convert to 32bit integer
    
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = {
  LimitedArray,
  getIndexBelowMaxForKey
};

