// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-377
description: >
    ES5 Attributes - property ([[Writable]] is false, [[Enumerable]]
    is false, [[Configurable]] is false) is undeletable
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
    value: 2010,
    writable: false,
    enumerable: false,
    configurable: false
});

assert(obj.hasOwnProperty("prop"));
verifyNotConfigurable(obj, "prop");
