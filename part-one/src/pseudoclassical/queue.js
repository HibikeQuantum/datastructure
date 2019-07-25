const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.seq = 0;
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.seq] = value;
  this.seq++;
  this.count++;
}

Queue.prototype.dequeue = function () {
  if (this.count > 0){
    var temp = Object.keys(this.storage).sort( (a,b)=> {
      if (a>b){
        return 1
      }
      if (a<b){
        return -1
      }
    });
    var output = this.storage[temp[0]];
    for ( let key in this.storage){
      if( this.storage[key]===this.storage[temp[0]]){
        delete this.storage[key];
      }
    }
    this.count--;
   return output;
  }
}
Queue.prototype.size = function () {
  return this.count;
};

module.exports = {
  Queue
};
