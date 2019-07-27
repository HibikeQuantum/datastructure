const Graph = require("../src/graph");

describe("graph", function() {
  let graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph).toHaveProperty("addNode");
    expect(graph).toHaveProperty("contains");
    expect(graph).toHaveProperty("removeNode");
    expect(graph).toHaveProperty("hasEdge");
    expect(graph).toHaveProperty("addEdge");
    expect(graph).toHaveProperty("removeEdge");
    expect(graph).toHaveProperty("forEachNode");
  });

  it("should store values as nodes that were inserted", function() {
    graph.addNode(1);
    expect(graph.contains(1)).toEqual(true);
  });

  it("should remove nodes that were inserted", function() {
    graph.addNode(2);
    expect(graph.contains(2)).toEqual(true);
    graph.removeNode(2);
    expect(graph.contains(2)).toEqual(false);
  });

  it("should create edges between two nodes", function() {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).toEqual(true);
    expect(graph.hasEdge(3, 1)).toEqual(false);
  });

  it("should remove edges between nodes", function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).toEqual(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).toEqual(false);
  });

  it("should remove edges between nodes when a node is removed", function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).toEqual(true);
    graph.removeNode(5);
    expect(graph.hasEdge(4, 5)).toEqual(false);
  });

  it("should execute a callback on each node in the graph", function() {
    var connectToFive = function(item) {
      graph.addEdge(item, 5);
    };
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.forEachNode(connectToFive);
    expect(graph.hasEdge(2, 5)).toEqual(true);
    expect(graph.hasEdge(1, 5)).toEqual(true);
    expect(graph.hasEdge(3, 5)).toEqual(true);
    expect(graph.hasEdge(5, 5)).toEqual(true);
  });
});
