// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Non-constructor functions that do not throw an when invoked via `new` do
    not satisfy the assertion.
includes: [testBuiltInObject.js]
---*/

var threw = false;

try {
  testBuiltInObject(function() {}, true, false, [], 0);
} catch(err) {
  threw = true;
  if (err.constructor !== Test262Error) {
    $ERROR(
      'Expected a Test262Error, but a "' + err.constructor.name +
      '" was thrown.'
    );
  }
}

if (threw === false) {
  $ERROR('Expected a Test262Error, but no error was thrown.');
}
