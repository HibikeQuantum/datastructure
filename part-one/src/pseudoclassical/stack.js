const Stack = function() {
  this.seq = 0;
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.seq] = value;
  this.seq++;
  this.count++;
}

Stack.prototype.pop = function() {
  if (this.count > 0) {
    this.seq--;
    var output = this.storage[this.seq];
    delete this.storage[this.seq];
    this.count--;
    return output;
  }
}

Stack.prototype.size = function() {
  return this.count;
}


module.exports = {
  Stack
};
