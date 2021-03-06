// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.2-3-c-2-s
description: >
    Calling code in strict mode - eval cannot instantiate variable in
    the variable environment of the calling context
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  var _10_4_2_3_c_2_s = 0;
  function _10_4_2_3_c_2_sFunc() {
     eval("var _10_4_2_3_c_2_s = 1");
     return _10_4_2_3_c_2_s===0;
  }
  return _10_4_2_3_c_2_sFunc();
 }
runTestCase(testcase);
