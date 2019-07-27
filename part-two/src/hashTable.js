const { LimitedArray, getIndexBelowMaxForKey } = require("./hashTableHelpers");
//get set checkLimit each
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

//    console.log("I", index, "STORAGE", this._storage, "VALUE", this._storage.storage[index]);
    return this._storage.storage[index];
  } else {
    return undefined;
  }


};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// var hash = new HashTable();
// // hash.insert("akey", "a");
// // hash.insert("bkey", "b");
// // hash.insert("ckey", "c");
// // console.warn(hash._storage,"현 상태");
// // console.log(hash.retrieve("akey"), '=== "a" ');
// // hash.remove("bkey");
// // console.log(hash.retrieve("beky"), '=== false');
// // console.log(hash);
// hash.insert("Steven", "Tyler");
// console.log(hash)
// hash.remove("Steven");
// console.log(hash.retrieve("Steven"), "===","undefined");


module.exports = HashTable;

