// Instantiate a new graph
const Graph = function() {
    this.adjList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    console.log('HEY', node)
    this.adjList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    for (let key in this.adjList) {
        if (this.adjList[key] === this.adjList[node]) {
            return true;
        }
    }
    return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    delete this.adjList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
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
Graph.prototype.addEdge = function(fromNode, toNode) {
    console.log("에드엣지", fromNode, toNode)
    if (fromNode && toNode) {
        this.adjList[fromNode].push(toNode);
        this.adjList[toNode].push(fromNode);
    }
    
  for (let j = 0, j < this.adjList[]) {
    var temp = this.adjList[j];
    for (let i = j + 1; i < this.adjList[j].length; i++) {
      if (this.adjList[i === temp) 
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    for (let i = 0; i < this.adjList[toNode].length; i++) {
        if (fromNode === this.adjList[toNode][i]) {
            this.adjList[toNode].splice(i ,1);
        }
    }
    for (let i = 0; i < this.adjList[fromNode].length; i++) {
        if (toNode === this.adjList[fromNode][i]) {
            this.adjList[fromNode].splice(i ,1);
        }
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (let key in this.adjList) {
//         console.error("메롱", this.adjList[key]);
        cb(this.adjList[key][0]);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addEdge(1, 2);
// console.log('그래프', graph);
graph.addNode(5);


var connectToFive = function(item) {
    console.log("ITEM", item)
    graph.addEdge(item, 5);
};
graph.forEachNode(connectToFive);
console.log(graph);


module.exports = Graph;
