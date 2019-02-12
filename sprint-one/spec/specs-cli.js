(async () => {
  let verifyClass, chai;
  if ( typeof module === "object" && typeof module.exports === "object" ) {
    require('mocha');
    _ = require('../../lib/underscore/underscore.js');
    chai = require('chai');
    verifyClass = require('./verifyClass');
  }
  else {
    var global = await new Promise(resolve => {
      require(['../../lib/jquery/jquery', '../../lib/mocha/mocha', '../../lib/chai/chai', './verifyClass'], ($, mocha, chai, verifyClass) => {
        resolve({ $, mocha, chai });
      });
    });
    chai = global.chai;
    verifyClass = window.verifyClass;
  }

  // mocha.setup('bdd');
  var expect = chai.expect;

  var runner = function(variant, { Stack, stackMethods }, { Queue, queueMethods }) {
    describe('stack', function() {

      var stack;
      var instantiator = variant === 'pseudoclassical' ? Stack : Stack;
      var prototypeOfInstances = variant === 'prototypal' && stackMethods;

      beforeEach(function() {
        if (variant === 'pseudoclassical') {
          stack = new instantiator();
        } else {
          stack = instantiator();
        }
      });

      describe('stack shared behavior', function() {

        verifyClass(instantiator).followsPattern(variant, {}, prototypeOfInstances);

        it('reports a size of zero for a new stack', function() {
          expect(stack.size()).to.equal(0);
        });

        it('reports a size of 2 after adding two items', function() {
          stack.push('a');
          stack.push('b');
          expect(stack.size()).to.equal(2);
        });

        it('does not error when removing from an empty stack', function() {
          expect(function() { stack.pop(); }).not.throws();
        });

        it('reports a size of 1 after adding two items and removing one', function() {
          stack.push('a');
          stack.push('b');
          stack.pop();
          expect(stack.size()).to.equal(1);
        });

        it('reports a size of 0 after removing more items than were added', function() {
          stack.push('a');
          stack.pop();
          stack.pop();
          expect(stack.size()).to.equal(0);
        });

        it('allows sequentially additing and removing items', function() {
          stack.push('a');
          expect(stack.pop()).to.equal('a');
          stack.push('b');
          expect(stack.pop()).to.equal('b');
        });

      });

      describe('stack-specific behavior', function() {
        it('removes the most recently added of two items', function() {
          stack.push('a');
          stack.push('b');
          expect(stack.pop()).to.equal('b');
        });

        it('removes the newest item, after newer items have already been added and removed', function() {
          stack.push('a');
          stack.push('b');
          stack.push('c');
          stack.pop();
          expect(stack.pop()).to.equal('b');
        });
      });

    });

    describe('queue', function() {
      var queue;
      var instantiator = variant === 'pseudoclassical' ? Queue : Queue;
      var prototypeOfInstances = variant === 'prototypal' && queueMethods;

      beforeEach(function() {
        if (variant === 'pseudoclassical') {
          queue = new instantiator();
        } else {
          queue = instantiator();
        }
      });

      describe('queue shared behavior', function() {

        verifyClass(instantiator).followsPattern(variant, {}, prototypeOfInstances);

        it('reports a size of zero for a new queue', function() {
          expect(queue.size()).to.equal(0);
        });

        it('reports a size of 2 after adding two items', function() {
          queue.enqueue('a');
          queue.enqueue('b');
          expect(queue.size()).to.equal(2);
        });

        it('does not error when removing from an empty queue', function() {
          expect(function() { queue.dequeue(); }).not.throws();
        });

        it('reports a size of 1 after adding two items and removing one', function() {
          queue.enqueue('a');
          queue.enqueue('b');
          queue.dequeue();
          expect(queue.size()).to.equal(1);
        });

        it('reports a size of 0 after removing more items than were added', function() {
          queue.enqueue('a');
          queue.dequeue();
          queue.dequeue();
          expect(queue.size()).to.equal(0);
        });

        it('allows sequentially adding and removing items', function() {
          queue.enqueue('a');
          expect(queue.dequeue()).to.equal('a');
          queue.enqueue('b');
          expect(queue.dequeue()).to.equal('b');
        });

      });

      describe('queue-specific behavior', function() {
        it('removes the least recently added of two items', function() {
          queue.enqueue('a');
          queue.enqueue('b');
          expect(queue.dequeue()).to.equal('a');
        });

        it('removes the oldest item, after newer items have already been added and removed', function() {
          queue.enqueue('a');
          queue.enqueue('b');
          queue.dequeue();
          queue.enqueue('c');
          expect(queue.dequeue()).to.equal('b');
        });
      });

    });
  }


  if ( typeof module === "object" && typeof module.exports === "object" ) {
    runner('functional',
      require('../src/functional/stack'),
      require('../src/functional/queue')
    );
    runner('functional-shared',
      require('../src/functional-shared/stack'),
      require('../src/functional-shared/queue')
    );
    runner('prototypal',
      require('../src/prototypal/stack'),
      require('../src/prototypal/queue')
    );
    runner('pseudoclassical',
      require('../src/pseudoclassical/stack'),
      require('../src/pseudoclassical/queue')
    );
  }
  else {
    var variant = document.location.search.slice(1);

    await new Promise(resolve => {
      require(['../lib/chai/chai.js', '../lib/mocha/mocha.js', `./src/${variant}/stack.js`, `./src/${variant}/queue.js`], () => {
        mocha.setup('bdd');
        console.log(window.queueMethods)
        runner(variant, { Stack, stackMethods: window.stackMethods }, { Queue, queueMethods: window.stackMethods });
        mocha.run();
        resolve();
      });
    });

    $(function() {
      $('<h4>The ' + variant + ' pattern</h4>').css({margin: 0}).prependTo(document.body);
    });

  }

})();
