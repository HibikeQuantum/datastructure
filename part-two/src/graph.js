// Instantiate a new graph
const Graph = function () {
  this.adjList = {
    "1": []
  };
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  console.log("입력 1단계")
  this.adjList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  for (let key in this.adjList) {
    if (this.adjList[key] === this.adjList[node]) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this.adjList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  var counter = 0;
  if (!this.adjList[fromNode] || !this.adjList[toNode]) {
    return false;
  }
  for (let i = 0; i < this.adjList[toNode].length; i++) {
    if (fromNode === this.adjList[toNode][i]) {
      counter++;
    }
  }
  for (let i = 0; i < this.adjList[fromNode].length; i++) {
    if (toNode === this.adjList[fromNode][i]) {
      counter++;
    }
  }
  if (counter === 2) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  if (fromNode && toNode) {
    this.adjList[fromNode].push(toNode);
    this.adjList[toNode].push(fromNode);
  }

  for (let key in this.adjList) {
    var temp = [];
    for (let i = 0; i < this.adjList[key].length; i++) {
      if (temp.indexOf(this.adjList[key][i]) !== -1) {
        console.log(temp.indexOf(this.adjList[key][i]), "<== 숙청");
        this.adjList[key].splice(i, 1);
        temp.splice(temp.indexOf(this.adjList[key][i]), 1)
      }
      temp.push(this.adjList[key][i]);
    }
  }

}

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  for (let i = 0; i < this.adjList[toNode].length; i++) {
    if (fromNode === this.adjList[toNode][i]) {
      this.adjList[toNode].splice(i, 1);
    }
  }
  for (let i = 0; i < this.adjList[fromNode].length; i++) {
    if (toNode === this.adjList[fromNode][i]) {
      this.adjList[fromNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let key in this.adjList) {
//         console.error("메롱", this.adjList[key]);
    cb(this.adjList[key][0]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// var graph = new Graph();
// graph.addNode(1);
// graph.addNode(2);
// graph.addEdge(1, 2);
// graph.addNode(5);
// console.log(graph,"1단계")
// var connectToFive = function (item) {
//     graph.addEdge(item, 5);
// };
// graph.forEachNode(connectToFive);
// console.log(graph,"2단계")
// graph.addNode(3);
//
// console.log(graph.hasEdge(1,5),"가지고 있음");
// console.log(graph.hasEdge(2,5),"가지고 있음");
// console.log(graph.hasEdge(3,5),"가지고 있음");
// console.log(graph,'파이널');

module.exports = Graph;
