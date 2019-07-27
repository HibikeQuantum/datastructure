const runner = require("./testRunner");

// These are test case for each of stlyes.
// If you need to run a test, comment out the code block

// Test for functional style

// runner(
//   "functional",
//   require("../src/functional/stack"),
//   require("../src/functional/queue")
// );

// Test for Functional-shared style

// runner(
//   "functional-shared",
//   require("../src/functional-shared/stack"),
//   require("../src/functional-shared/queue")
// );

// Test for Prototypal style

// runner(
//   "prototypal",
//   require("../src/prototypal/stack"),
//   require("../src/prototypal/queue")
// );

// Test for pseudoclassical style

runner(
  "pseudoclassical",
  require("../src/pseudoclassical/stack"),
  require("../src/pseudoclassical/queue")
);
