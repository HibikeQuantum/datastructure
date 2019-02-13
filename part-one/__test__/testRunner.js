const verifyClass = require("./verifyClass");

const runner = function(
  variant,
  { Stack, stackMethods },
  { Queue, queueMethods }
) {
  describe(`${variant} stack`, function() {
    let stack;
    let instantiator = variant === "pseudoclassical" ? Stack : Stack;
    let prototypeOfInstances = variant === "prototypal" && stackMethods;

    beforeEach(function() {
      if (variant === "pseudoclassical") {
        stack = new instantiator();
      } else {
        stack = instantiator();
      }
    });

    describe("stack shared behavior", function() {
      verifyClass(instantiator).followsPattern(
        variant,
        {},
        prototypeOfInstances
      );

      it("reports a size of zero for a new stack", function() {
        expect(stack.size()).toEqual(0);
      });

      it("reports a size of 2 after adding two items", function() {
        stack.push("a");
        stack.push("b");
        expect(stack.size()).toEqual(2);
      });

      it("does not error when removing from an empty stack", function() {
        expect(function() {
          stack.pop();
        }).not.toThrow();
      });

      it("reports a size of 1 after adding two items and removing one", function() {
        stack.push("a");
        stack.push("b");
        stack.pop();
        expect(stack.size()).toEqual(1);
      });

      it("reports a size of 0 after removing more items than were added", function() {
        stack.push("a");
        stack.pop();
        stack.pop();
        expect(stack.size()).toEqual(0);
      });

      it("allows sequentially additing and removing items", function() {
        stack.push("a");
        expect(stack.pop()).toEqual("a");
        stack.push("b");
        expect(stack.pop()).toEqual("b");
      });
    });

    describe("stack-specific behavior", function() {
      it("removes the most recently added of two items", function() {
        stack.push("a");
        stack.push("b");
        expect(stack.pop()).toEqual("b");
      });

      it("removes the newest item, after newer items have already been added and removed", function() {
        stack.push("a");
        stack.push("b");
        stack.push("c");
        stack.pop();
        expect(stack.pop()).toEqual("b");
      });
    });
  });

  describe(`${variant} queue`, function() {
    var queue;
    var instantiator = variant === "pseudoclassical" ? Queue : Queue;
    var prototypeOfInstances = variant === "prototypal" && queueMethods;

    beforeEach(function() {
      if (variant === "pseudoclassical") {
        queue = new instantiator();
      } else {
        queue = instantiator();
      }
    });

    describe("queue shared behavior", function() {
      verifyClass(instantiator).followsPattern(
        variant,
        {},
        prototypeOfInstances
      );

      it("reports a size of zero for a new queue", function() {
        expect(queue.size()).toEqual(0);
      });

      it("reports a size of 2 after adding two items", function() {
        queue.enqueue("a");
        queue.enqueue("b");
        expect(queue.size()).toEqual(2);
      });

      it("does not error when removing from an empty queue", function() {
        expect(function() {
          queue.dequeue();
        }).not.toThrow();
      });

      it("reports a size of 1 after adding two items and removing one", function() {
        queue.enqueue("a");
        queue.enqueue("b");
        queue.dequeue();
        expect(queue.size()).toEqual(1);
      });

      it("reports a size of 0 after removing more items than were added", function() {
        queue.enqueue("a");
        queue.dequeue();
        queue.dequeue();
        expect(queue.size()).toEqual(0);
      });

      it("allows sequentially adding and removing items", function() {
        queue.enqueue("a");
        expect(queue.dequeue()).toEqual("a");
        queue.enqueue("b");
        expect(queue.dequeue()).toEqual("b");
      });
    });

    describe("queue-specific behavior", function() {
      it("removes the least recently added of two items", function() {
        queue.enqueue("a");
        queue.enqueue("b");
        expect(queue.dequeue()).toEqual("a");
      });

      it("removes the oldest item, after newer items have already been added and removed", function() {
        queue.enqueue("a");
        queue.enqueue("b");
        queue.dequeue();
        queue.enqueue("c");
        expect(queue.dequeue()).toEqual("b");
      });
    });
  });
};

module.exports = runner;
