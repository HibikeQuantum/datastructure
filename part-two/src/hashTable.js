const { LimitedArray, getIndexBelowMaxForKey } = require("./hashTableHelpers");
// pseudoclassical style
// LimitedArray' has get, set, checkLimit, each method
const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);

};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index)) {
    return this._storage.storage[index];
  } else {
    return undefined;
  }

};

HashTable.prototype.remove = function (k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
*/

module.exports = HashTable;

