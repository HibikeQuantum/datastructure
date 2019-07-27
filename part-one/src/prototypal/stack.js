const Stack = function() {
  var someInstance = Object.create(stackMethods)
  return someInstance;
};

const stackMethods = {
  seq:0,
  count:0,
  storage:{}
};

stackMethods.push = function(value) {
  this.storage[this.seq] = value;
  this.seq++;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.seq--;
    var output = this.storage[this.seq];
    delete this.storage[this.seq];
    this.count--;
    return output;
  }
};

stackMethods.size = function() {
  return this.count;
};

module.exports = {
  Stack,
  stackMethods
};
