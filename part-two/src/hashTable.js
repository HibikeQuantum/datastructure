const { LimitedArray, getIndexBelowMaxForKey } = require("./hashTableHelpers");

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //get, set, checkLimit, each
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
  
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    console.log("I", index, "STORAGE", this._storage, "VALUE", this._storage[index]);
    return this._storage[index];
  } else {
    return false;
  }
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
var hash = new HashTable();
hash.insert("whatd", "a");
hash.insert("awjeri", "b");
console.log(hash._storage);
hash.insert("asdf", "3490")
console.log(hash._storage);
console.log(hash.retrieve("asdf"), '=== true');
hash.remove("asdf");
console.log(hash.retrieve("asdfasdf"), '=== false');
console.log(hash);




module.exports = HashTable;
