/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './src/js/app.js'),
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './node_modules/assert/assert.js':
      /*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(global) {
          // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
          // original notice:

          /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
          function compare(a, b) {
            if (a === b) {
              return 0;
            }

            var x = a.length;
            var y = b.length;

            for (var i = 0, len = Math.min(x, y); i < len; ++i) {
              if (a[i] !== b[i]) {
                x = a[i];
                y = b[i];
                break;
              }
            }

            if (x < y) {
              return -1;
            }
            if (y < x) {
              return 1;
            }
            return 0;
          }
          function isBuffer(b) {
            if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
              return global.Buffer.isBuffer(b);
            }
            return !!(b != null && b._isBuffer);
          }

          // based on node assert, original notice:

          // http://wiki.commonjs.org/wiki/Unit_Testing/1.0
          //
          // THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
          //
          // Originally from narwhal.js (http://narwhaljs.org)
          // Copyright (c) 2009 Thomas Robinson <280north.com>
          //
          // Permission is hereby granted, free of charge, to any person obtaining a copy
          // of this software and associated documentation files (the 'Software'), to
          // deal in the Software without restriction, including without limitation the
          // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
          // sell copies of the Software, and to permit persons to whom the Software is
          // furnished to do so, subject to the following conditions:
          //
          // The above copyright notice and this permission notice shall be included in
          // all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
          // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

          var util = __webpack_require__(
            /*! util/ */ './node_modules/util/util.js',
          );
          var hasOwn = Object.prototype.hasOwnProperty;
          var pSlice = Array.prototype.slice;
          var functionsHaveNames = (function() {
            return function foo() {}.name === 'foo';
          })();
          function pToString(obj) {
            return Object.prototype.toString.call(obj);
          }
          function isView(arrbuf) {
            if (isBuffer(arrbuf)) {
              return false;
            }
            if (typeof global.ArrayBuffer !== 'function') {
              return false;
            }
            if (typeof ArrayBuffer.isView === 'function') {
              return ArrayBuffer.isView(arrbuf);
            }
            if (!arrbuf) {
              return false;
            }
            if (arrbuf instanceof DataView) {
              return true;
            }
            if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
              return true;
            }
            return false;
          }
          // 1. The assert module provides functions that throw
          // AssertionError's when particular conditions are not met. The
          // assert module must conform to the following interface.

          var assert = (module.exports = ok);

          // 2. The AssertionError is defined in assert.
          // new assert.AssertionError({ message: message,
          //                             actual: actual,
          //                             expected: expected })

          var regex = /\s*function\s+([^\(\s]*)\s*/;
          // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
          function getName(func) {
            if (!util.isFunction(func)) {
              return;
            }
            if (functionsHaveNames) {
              return func.name;
            }
            var str = func.toString();
            var match = str.match(regex);
            return match && match[1];
          }
          assert.AssertionError = function AssertionError(options) {
            this.name = 'AssertionError';
            this.actual = options.actual;
            this.expected = options.expected;
            this.operator = options.operator;
            if (options.message) {
              this.message = options.message;
              this.generatedMessage = false;
            } else {
              this.message = getMessage(this);
              this.generatedMessage = true;
            }
            var stackStartFunction = options.stackStartFunction || fail;
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, stackStartFunction);
            } else {
              // non v8 browsers so we can have a stacktrace
              var err = new Error();
              if (err.stack) {
                var out = err.stack;

                // try to strip useless frames
                var fn_name = getName(stackStartFunction);
                var idx = out.indexOf('\n' + fn_name);
                if (idx >= 0) {
                  // once we have located the function frame
                  // we need to strip out everything before it (and its line)
                  var next_line = out.indexOf('\n', idx + 1);
                  out = out.substring(next_line + 1);
                }

                this.stack = out;
              }
            }
          };

          // assert.AssertionError instanceof Error
          util.inherits(assert.AssertionError, Error);

          function truncate(s, n) {
            if (typeof s === 'string') {
              return s.length < n ? s : s.slice(0, n);
            } else {
              return s;
            }
          }
          function inspect(something) {
            if (functionsHaveNames || !util.isFunction(something)) {
              return util.inspect(something);
            }
            var rawname = getName(something);
            var name = rawname ? ': ' + rawname : '';
            return '[Function' + name + ']';
          }
          function getMessage(self) {
            return (
              truncate(inspect(self.actual), 128) +
              ' ' +
              self.operator +
              ' ' +
              truncate(inspect(self.expected), 128)
            );
          }

          // At present only the three keys mentioned above are used and
          // understood by the spec. Implementations or sub modules can pass
          // other keys to the AssertionError's constructor - they will be
          // ignored.

          // 3. All of the following functions must throw an AssertionError
          // when a corresponding condition is not met, with a message that
          // may be undefined if not provided.  All assertion methods provide
          // both the actual and expected values to the assertion error for
          // display purposes.

          function fail(
            actual,
            expected,
            message,
            operator,
            stackStartFunction,
          ) {
            throw new assert.AssertionError({
              message: message,
              actual: actual,
              expected: expected,
              operator: operator,
              stackStartFunction: stackStartFunction,
            });
          }

          // EXTENSION! allows for well behaved errors defined elsewhere.
          assert.fail = fail;

          // 4. Pure assertion tests whether a value is truthy, as determined
          // by !!guard.
          // assert.ok(guard, message_opt);
          // This statement is equivalent to assert.equal(true, !!guard,
          // message_opt);. To test strictly for the value true, use
          // assert.strictEqual(true, guard, message_opt);.

          function ok(value, message) {
            if (!value) fail(value, true, message, '==', assert.ok);
          }
          assert.ok = ok;

          // 5. The equality assertion tests shallow, coercive equality with
          // ==.
          // assert.equal(actual, expected, message_opt);

          assert.equal = function equal(actual, expected, message) {
            if (actual != expected)
              fail(actual, expected, message, '==', assert.equal);
          };

          // 6. The non-equality assertion tests for whether two objects are not equal
          // with != assert.notEqual(actual, expected, message_opt);

          assert.notEqual = function notEqual(actual, expected, message) {
            if (actual == expected) {
              fail(actual, expected, message, '!=', assert.notEqual);
            }
          };

          // 7. The equivalence assertion tests a deep equality relation.
          // assert.deepEqual(actual, expected, message_opt);

          assert.deepEqual = function deepEqual(actual, expected, message) {
            if (!_deepEqual(actual, expected, false)) {
              fail(actual, expected, message, 'deepEqual', assert.deepEqual);
            }
          };

          assert.deepStrictEqual = function deepStrictEqual(
            actual,
            expected,
            message,
          ) {
            if (!_deepEqual(actual, expected, true)) {
              fail(
                actual,
                expected,
                message,
                'deepStrictEqual',
                assert.deepStrictEqual,
              );
            }
          };

          function _deepEqual(actual, expected, strict, memos) {
            // 7.1. All identical values are equivalent, as determined by ===.
            if (actual === expected) {
              return true;
            } else if (isBuffer(actual) && isBuffer(expected)) {
              return compare(actual, expected) === 0;

              // 7.2. If the expected value is a Date object, the actual value is
              // equivalent if it is also a Date object that refers to the same time.
            } else if (util.isDate(actual) && util.isDate(expected)) {
              return actual.getTime() === expected.getTime();

              // 7.3 If the expected value is a RegExp object, the actual value is
              // equivalent if it is also a RegExp object with the same source and
              // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
            } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
              return (
                actual.source === expected.source &&
                actual.global === expected.global &&
                actual.multiline === expected.multiline &&
                actual.lastIndex === expected.lastIndex &&
                actual.ignoreCase === expected.ignoreCase
              );

              // 7.4. Other pairs that do not both pass typeof value == 'object',
              // equivalence is determined by ==.
            } else if (
              (actual === null || typeof actual !== 'object') &&
              (expected === null || typeof expected !== 'object')
            ) {
              return strict ? actual === expected : actual == expected;

              // If both values are instances of typed arrays, wrap their underlying
              // ArrayBuffers in a Buffer each to increase performance
              // This optimization requires the arrays to have the same type as checked by
              // Object.prototype.toString (aka pToString). Never perform binary
              // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
              // bit patterns are not identical.
            } else if (
              isView(actual) &&
              isView(expected) &&
              pToString(actual) === pToString(expected) &&
              !(
                actual instanceof Float32Array || actual instanceof Float64Array
              )
            ) {
              return (
                compare(
                  new Uint8Array(actual.buffer),
                  new Uint8Array(expected.buffer),
                ) === 0
              );

              // 7.5 For all other Object pairs, including Array objects, equivalence is
              // determined by having the same number of owned properties (as verified
              // with Object.prototype.hasOwnProperty.call), the same set of keys
              // (although not necessarily the same order), equivalent values for every
              // corresponding key, and an identical 'prototype' property. Note: this
              // accounts for both named and indexed properties on Arrays.
            } else if (isBuffer(actual) !== isBuffer(expected)) {
              return false;
            } else {
              memos = memos || { actual: [], expected: [] };

              var actualIndex = memos.actual.indexOf(actual);
              if (actualIndex !== -1) {
                if (actualIndex === memos.expected.indexOf(expected)) {
                  return true;
                }
              }

              memos.actual.push(actual);
              memos.expected.push(expected);

              return objEquiv(actual, expected, strict, memos);
            }
          }

          function isArguments(object) {
            return (
              Object.prototype.toString.call(object) == '[object Arguments]'
            );
          }

          function objEquiv(a, b, strict, actualVisitedObjects) {
            if (a === null || a === undefined || b === null || b === undefined)
              return false;
            // if one is a primitive, the other must be same
            if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
            if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
              return false;
            var aIsArgs = isArguments(a);
            var bIsArgs = isArguments(b);
            if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs)) return false;
            if (aIsArgs) {
              a = pSlice.call(a);
              b = pSlice.call(b);
              return _deepEqual(a, b, strict);
            }
            var ka = objectKeys(a);
            var kb = objectKeys(b);
            var key, i;
            // having the same number of owned properties (keys incorporates
            // hasOwnProperty)
            if (ka.length !== kb.length) return false;
            //the same set of keys (although not necessarily the same order),
            ka.sort();
            kb.sort();
            //~~~cheap key test
            for (i = ka.length - 1; i >= 0; i--) {
              if (ka[i] !== kb[i]) return false;
            }
            //equivalent values for every corresponding key, and
            //~~~possibly expensive deep test
            for (i = ka.length - 1; i >= 0; i--) {
              key = ka[i];
              if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
                return false;
            }
            return true;
          }

          // 8. The non-equivalence assertion tests for any deep inequality.
          // assert.notDeepEqual(actual, expected, message_opt);

          assert.notDeepEqual = function notDeepEqual(
            actual,
            expected,
            message,
          ) {
            if (_deepEqual(actual, expected, false)) {
              fail(
                actual,
                expected,
                message,
                'notDeepEqual',
                assert.notDeepEqual,
              );
            }
          };

          assert.notDeepStrictEqual = notDeepStrictEqual;
          function notDeepStrictEqual(actual, expected, message) {
            if (_deepEqual(actual, expected, true)) {
              fail(
                actual,
                expected,
                message,
                'notDeepStrictEqual',
                notDeepStrictEqual,
              );
            }
          }

          // 9. The strict equality assertion tests strict equality, as determined by ===.
          // assert.strictEqual(actual, expected, message_opt);

          assert.strictEqual = function strictEqual(actual, expected, message) {
            if (actual !== expected) {
              fail(actual, expected, message, '===', assert.strictEqual);
            }
          };

          // 10. The strict non-equality assertion tests for strict inequality, as
          // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

          assert.notStrictEqual = function notStrictEqual(
            actual,
            expected,
            message,
          ) {
            if (actual === expected) {
              fail(actual, expected, message, '!==', assert.notStrictEqual);
            }
          };

          function expectedException(actual, expected) {
            if (!actual || !expected) {
              return false;
            }

            if (Object.prototype.toString.call(expected) == '[object RegExp]') {
              return expected.test(actual);
            }

            try {
              if (actual instanceof expected) {
                return true;
              }
            } catch (e) {
              // Ignore.  The instanceof check doesn't work for arrow functions.
            }

            if (Error.isPrototypeOf(expected)) {
              return false;
            }

            return expected.call({}, actual) === true;
          }

          function _tryBlock(block) {
            var error;
            try {
              block();
            } catch (e) {
              error = e;
            }
            return error;
          }

          function _throws(shouldThrow, block, expected, message) {
            var actual;

            if (typeof block !== 'function') {
              throw new TypeError('"block" argument must be a function');
            }

            if (typeof expected === 'string') {
              message = expected;
              expected = null;
            }

            actual = _tryBlock(block);

            message =
              (expected && expected.name ? ' (' + expected.name + ').' : '.') +
              (message ? ' ' + message : '.');

            if (shouldThrow && !actual) {
              fail(actual, expected, 'Missing expected exception' + message);
            }

            var userProvidedMessage = typeof message === 'string';
            var isUnwantedException = !shouldThrow && util.isError(actual);
            var isUnexpectedException = !shouldThrow && actual && !expected;

            if (
              (isUnwantedException &&
                userProvidedMessage &&
                expectedException(actual, expected)) ||
              isUnexpectedException
            ) {
              fail(actual, expected, 'Got unwanted exception' + message);
            }

            if (
              (shouldThrow &&
                actual &&
                expected &&
                !expectedException(actual, expected)) ||
              (!shouldThrow && actual)
            ) {
              throw actual;
            }
          }

          // 11. Expected to throw an error:
          // assert.throws(block, Error_opt, message_opt);

          assert.throws = function(
            block,
            /*optional*/ error,
            /*optional*/ message,
          ) {
            _throws(true, block, error, message);
          };

          // EXTENSION! This is annoying to write outside this module.
          assert.doesNotThrow = function(
            block,
            /*optional*/ error,
            /*optional*/ message,
          ) {
            _throws(false, block, error, message);
          };

          assert.ifError = function(err) {
            if (err) throw err;
          };

          var objectKeys =
            Object.keys ||
            function(obj) {
              var keys = [];
              for (var key in obj) {
                if (hasOwn.call(obj, key)) keys.push(key);
              }
              return keys;
            };

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js',
          ),
        ));

        /***/
      },

    /***/ './node_modules/basicscroll/dist/basicScroll.min.js':
      /*!**********************************************************!*\
  !*** ./node_modules/basicscroll/dist/basicScroll.min.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(global) {
          var require;
          var require;
          !(function(t) {
            if (true) module.exports = t();
            else {
            }
          })(function() {
            return (function u(i, c, a) {
              function s(n, t) {
                if (!c[n]) {
                  if (!i[n]) {
                    var e = 'function' == typeof require && require;
                    if (!t && e) return require(n, !0);
                    if (f) return f(n, !0);
                    var r = new Error("Cannot find module '" + n + "'");
                    throw ((r.code = 'MODULE_NOT_FOUND'), r);
                  }
                  var o = (c[n] = { exports: {} });
                  i[n][0].call(
                    o.exports,
                    function(t) {
                      return s(i[n][1][t] || t);
                    },
                    o,
                    o.exports,
                    u,
                    i,
                    c,
                    a,
                  );
                }
                return c[n].exports;
              }
              for (
                var f = 'function' == typeof require && require, t = 0;
                t < a.length;
                t++
              )
                s(a[t]);
              return s;
            })(
              {
                1: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      var n = 2.5949095;
                      return (t *= 2) < 1
                        ? t * t * ((n + 1) * t - n) * 0.5
                        : 0.5 * ((t -= 2) * t * ((n + 1) * t + n) + 2);
                    };
                  },
                  {},
                ],
                2: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      var n = 1.70158;
                      return t * t * ((n + 1) * t - n);
                    };
                  },
                  {},
                ],
                3: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      var n = 1.70158;
                      return --t * t * ((n + 1) * t + n) + 1;
                    };
                  },
                  {},
                ],
                4: [
                  function(t, n, e) {
                    'use strict';
                    var r = t('./bounce-out');
                    n.exports = function(t) {
                      return t < 0.5
                        ? 0.5 * (1 - r(1 - 2 * t))
                        : 0.5 * r(2 * t - 1) + 0.5;
                    };
                  },
                  { './bounce-out': 6 },
                ],
                5: [
                  function(t, n, e) {
                    'use strict';
                    var r = t('./bounce-out');
                    n.exports = function(t) {
                      return 1 - r(1 - t);
                    };
                  },
                  { './bounce-out': 6 },
                ],
                6: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      var n = t * t;
                      return t < 4 / 11
                        ? 7.5625 * n
                        : t < 8 / 11
                          ? 9.075 * n - 9.9 * t + 3.4
                          : t < 0.9
                            ? 4356 / 361 * n - 35442 / 1805 * t + 16061 / 1805
                            : 10.8 * t * t - 20.52 * t + 10.72;
                    };
                  },
                  {},
                ],
                7: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return (t *= 2) < 1
                        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                    };
                  },
                  {},
                ],
                8: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return 1 - Math.sqrt(1 - t * t);
                    };
                  },
                  {},
                ],
                9: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return Math.sqrt(1 - --t * t);
                    };
                  },
                  {},
                ],
                10: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return t < 0.5
                        ? 4 * t * t * t
                        : 0.5 * Math.pow(2 * t - 2, 3) + 1;
                    };
                  },
                  {},
                ],
                11: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return t * t * t;
                    };
                  },
                  {},
                ],
                12: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      var n = t - 1;
                      return n * n * n + 1;
                    };
                  },
                  {},
                ],
                13: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return t < 0.5
                        ? 0.5 *
                            Math.sin(13 * Math.PI / 2 * 2 * t) *
                            Math.pow(2, 10 * (2 * t - 1))
                        : 0.5 *
                            Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) *
                            Math.pow(2, -10 * (2 * t - 1)) +
                            1;
                    };
                  },
                  {},
                ],
                14: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return (
                        Math.sin(13 * t * Math.PI / 2) *
                        Math.pow(2, 10 * (t - 1))
                      );
                    };
                  },
                  {},
                ],
                15: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return (
                        Math.sin(-13 * (t + 1) * Math.PI / 2) *
                          Math.pow(2, -10 * t) +
                        1
                      );
                    };
                  },
                  {},
                ],
                16: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return 0 === t || 1 === t
                        ? t
                        : t < 0.5
                          ? 0.5 * Math.pow(2, 20 * t - 10)
                          : -0.5 * Math.pow(2, 10 - 20 * t) + 1;
                    };
                  },
                  {},
                ],
                17: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return 0 === t ? t : Math.pow(2, 10 * (t - 1));
                    };
                  },
                  {},
                ],
                18: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return 1 === t ? t : 1 - Math.pow(2, -10 * t);
                    };
                  },
                  {},
                ],
                19: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = {
                      backInOut: t('./back-in-out'),
                      backIn: t('./back-in'),
                      backOut: t('./back-out'),
                      bounceInOut: t('./bounce-in-out'),
                      bounceIn: t('./bounce-in'),
                      bounceOut: t('./bounce-out'),
                      circInOut: t('./circ-in-out'),
                      circIn: t('./circ-in'),
                      circOut: t('./circ-out'),
                      cubicInOut: t('./cubic-in-out'),
                      cubicIn: t('./cubic-in'),
                      cubicOut: t('./cubic-out'),
                      elasticInOut: t('./elastic-in-out'),
                      elasticIn: t('./elastic-in'),
                      elasticOut: t('./elastic-out'),
                      expoInOut: t('./expo-in-out'),
                      expoIn: t('./expo-in'),
                      expoOut: t('./expo-out'),
                      linear: t('./linear'),
                      quadInOut: t('./quad-in-out'),
                      quadIn: t('./quad-in'),
                      quadOut: t('./quad-out'),
                      quartInOut: t('./quart-in-out'),
                      quartIn: t('./quart-in'),
                      quartOut: t('./quart-out'),
                      quintInOut: t('./quint-in-out'),
                      quintIn: t('./quint-in'),
                      quintOut: t('./quint-out'),
                      sineInOut: t('./sine-in-out'),
                      sineIn: t('./sine-in'),
                      sineOut: t('./sine-out'),
                    };
                  },
                  {
                    './back-in': 2,
                    './back-in-out': 1,
                    './back-out': 3,
                    './bounce-in': 5,
                    './bounce-in-out': 4,
                    './bounce-out': 6,
                    './circ-in': 8,
                    './circ-in-out': 7,
                    './circ-out': 9,
                    './cubic-in': 11,
                    './cubic-in-out': 10,
                    './cubic-out': 12,
                    './elastic-in': 14,
                    './elastic-in-out': 13,
                    './elastic-out': 15,
                    './expo-in': 17,
                    './expo-in-out': 16,
                    './expo-out': 18,
                    './linear': 20,
                    './quad-in': 22,
                    './quad-in-out': 21,
                    './quad-out': 23,
                    './quart-in': 25,
                    './quart-in-out': 24,
                    './quart-out': 26,
                    './quint-in': 28,
                    './quint-in-out': 27,
                    './quint-out': 29,
                    './sine-in': 31,
                    './sine-in-out': 30,
                    './sine-out': 32,
                  },
                ],
                20: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return t;
                    };
                  },
                  {},
                ],
                21: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return (t /= 0.5) < 1
                        ? 0.5 * t * t
                        : -0.5 * (--t * (t - 2) - 1);
                    };
                  },
                  {},
                ],
                22: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return t * t;
                    };
                  },
                  {},
                ],
                23: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return -t * (t - 2);
                    };
                  },
                  {},
                ],
                24: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return t < 0.5
                        ? 8 * Math.pow(t, 4)
                        : -8 * Math.pow(t - 1, 4) + 1;
                    };
                  },
                  {},
                ],
                25: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return Math.pow(t, 4);
                    };
                  },
                  {},
                ],
                26: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return Math.pow(t - 1, 3) * (1 - t) + 1;
                    };
                  },
                  {},
                ],
                27: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return (t *= 2) < 1
                        ? 0.5 * t * t * t * t * t
                        : 0.5 * ((t -= 2) * t * t * t * t + 2);
                    };
                  },
                  {},
                ],
                28: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return t * t * t * t * t;
                    };
                  },
                  {},
                ],
                29: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return --t * t * t * t * t + 1;
                    };
                  },
                  {},
                ],
                30: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return -0.5 * (Math.cos(Math.PI * t) - 1);
                    };
                  },
                  {},
                ],
                31: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      var n = Math.cos(t * Math.PI * 0.5);
                      return Math.abs(n) < 1e-14 ? 1 : 1 - n;
                    };
                  },
                  {},
                ],
                32: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t) {
                      return Math.sin(t * Math.PI / 2);
                    };
                  },
                  {},
                ],
                33: [
                  function(t, Xt, Yt) {
                    (function(t) {
                      'use strict';
                      var s =
                          'function' == typeof Symbol &&
                          'symbol' == typeof Symbol.iterator
                            ? function(t) {
                                return typeof t;
                              }
                            : function(t) {
                                return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                              },
                        o = 200,
                        r = '__lodash_hash_undefined__',
                        e = 9007199254740991,
                        x = '[object Arguments]',
                        j = '[object Boolean]',
                        O = '[object Date]',
                        M = '[object Function]',
                        q = '[object GeneratorFunction]',
                        I = '[object Map]',
                        E = '[object Number]',
                        A = '[object Object]',
                        u = '[object Promise]',
                        k = '[object RegExp]',
                        P = '[object Set]',
                        S = '[object String]',
                        $ = '[object Symbol]',
                        i = '[object WeakMap]',
                        F = '[object ArrayBuffer]',
                        T = '[object DataView]',
                        D = '[object Float32Array]',
                        U = '[object Float64Array]',
                        z = '[object Int8Array]',
                        B = '[object Int16Array]',
                        L = '[object Int32Array]',
                        N = '[object Uint8Array]',
                        C = '[object Uint8ClampedArray]',
                        H = '[object Uint16Array]',
                        R = '[object Uint32Array]',
                        V = /\w*$/,
                        c = /^\[object .+?Constructor\]$/,
                        a = /^(?:0|[1-9]\d*)$/,
                        W = {};
                      (W[x] = W['[object Array]'] = W[F] = W[T] = W[j] = W[
                        O
                      ] = W[D] = W[U] = W[z] = W[B] = W[L] = W[I] = W[E] = W[
                        A
                      ] = W[k] = W[P] = W[S] = W[$] = W[N] = W[C] = W[H] = W[
                        R
                      ] = !0),
                        (W['[object Error]'] = W[M] = W[i] = !1);
                      var n =
                          'object' == (void 0 === t ? 'undefined' : s(t)) &&
                          t &&
                          t.Object === Object &&
                          t,
                        f =
                          'object' ==
                            ('undefined' == typeof self
                              ? 'undefined'
                              : s(self)) &&
                          self &&
                          self.Object === Object &&
                          self,
                        l = n || f || Function('return this')(),
                        p =
                          'object' == (void 0 === Yt ? 'undefined' : s(Yt)) &&
                          Yt &&
                          !Yt.nodeType &&
                          Yt,
                        d =
                          p &&
                          'object' == (void 0 === Xt ? 'undefined' : s(Xt)) &&
                          Xt &&
                          !Xt.nodeType &&
                          Xt,
                        h = d && d.exports === p;
                      function G(t, n) {
                        return t.set(n[0], n[1]), t;
                      }
                      function J(t, n) {
                        return t.add(n), t;
                      }
                      function K(t, n, e, r) {
                        var o = -1,
                          u = t ? t.length : 0;
                        for (r && u && (e = t[++o]); ++o < u; )
                          e = n(e, t[o], o, t);
                        return e;
                      }
                      function Q(t) {
                        var n = !1;
                        if (null != t && 'function' != typeof t.toString)
                          try {
                            n = !!(t + '');
                          } catch (t) {}
                        return n;
                      }
                      function X(t) {
                        var e = -1,
                          r = Array(t.size);
                        return (
                          t.forEach(function(t, n) {
                            r[++e] = [n, t];
                          }),
                          r
                        );
                      }
                      function v(n, e) {
                        return function(t) {
                          return n(e(t));
                        };
                      }
                      function Y(t) {
                        var n = -1,
                          e = Array(t.size);
                        return (
                          t.forEach(function(t) {
                            e[++n] = t;
                          }),
                          e
                        );
                      }
                      var b,
                        y = Array.prototype,
                        _ = Function.prototype,
                        m = Object.prototype,
                        g = l['__core-js_shared__'],
                        w = (b = /[^.]+$/.exec(
                          (g && g.keys && g.keys.IE_PROTO) || '',
                        ))
                          ? 'Symbol(src)_1.' + b
                          : '',
                        Z = _.toString,
                        tt = m.hasOwnProperty,
                        nt = m.toString,
                        et = RegExp(
                          '^' +
                            Z.call(tt)
                              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                              .replace(
                                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                '$1.*?',
                              ) +
                            '$',
                        ),
                        rt = h ? l.Buffer : void 0,
                        ot = l.Symbol,
                        ut = l.Uint8Array,
                        it = v(Object.getPrototypeOf, Object),
                        ct = Object.create,
                        at = m.propertyIsEnumerable,
                        st = y.splice,
                        ft = Object.getOwnPropertySymbols,
                        lt = rt ? rt.isBuffer : void 0,
                        pt = v(Object.keys, Object),
                        dt = zt(l, 'DataView'),
                        ht = zt(l, 'Map'),
                        vt = zt(l, 'Promise'),
                        bt = zt(l, 'Set'),
                        yt = zt(l, 'WeakMap'),
                        _t = zt(Object, 'create'),
                        mt = Ht(dt),
                        gt = Ht(ht),
                        wt = Ht(vt),
                        xt = Ht(bt),
                        jt = Ht(yt),
                        Ot = ot ? ot.prototype : void 0,
                        Mt = Ot ? Ot.valueOf : void 0;
                      function qt(t) {
                        var n = -1,
                          e = t ? t.length : 0;
                        for (this.clear(); ++n < e; ) {
                          var r = t[n];
                          this.set(r[0], r[1]);
                        }
                      }
                      function It(t) {
                        var n = -1,
                          e = t ? t.length : 0;
                        for (this.clear(); ++n < e; ) {
                          var r = t[n];
                          this.set(r[0], r[1]);
                        }
                      }
                      function Et(t) {
                        var n = -1,
                          e = t ? t.length : 0;
                        for (this.clear(); ++n < e; ) {
                          var r = t[n];
                          this.set(r[0], r[1]);
                        }
                      }
                      function At(t) {
                        this.__data__ = new It(t);
                      }
                      function kt(t, n) {
                        var e,
                          r,
                          o,
                          u =
                            Vt(t) ||
                            ((o = r = e = t) &&
                              'object' == (void 0 === o ? 'undefined' : s(o)) &&
                              Wt(r) &&
                              tt.call(e, 'callee') &&
                              (!at.call(e, 'callee') || nt.call(e) == x))
                              ? (function(t, n) {
                                  for (var e = -1, r = Array(t); ++e < t; )
                                    r[e] = n(e);
                                  return r;
                                })(t.length, String)
                              : [],
                          i = u.length,
                          c = !!i;
                        for (var a in t)
                          (!n && !tt.call(t, a)) ||
                            (c && ('length' == a || Nt(a, i))) ||
                            u.push(a);
                        return u;
                      }
                      function Pt(t, n, e) {
                        var r = t[n];
                        (tt.call(t, n) &&
                          Rt(r, e) &&
                          (void 0 !== e || n in t)) ||
                          (t[n] = e);
                      }
                      function St(t, n) {
                        for (var e = t.length; e--; )
                          if (Rt(t[e][0], n)) return e;
                        return -1;
                      }
                      function $t(e, r, o, u, t, n, i) {
                        var c;
                        if ((u && (c = n ? u(e, t, n, i) : u(e)), void 0 !== c))
                          return c;
                        if (!Kt(e)) return e;
                        var a,
                          s,
                          f,
                          l,
                          p,
                          d,
                          h = Vt(e);
                        if (h) {
                          if (
                            ((c = (function(t) {
                              var n = t.length,
                                e = t.constructor(n);
                              n &&
                                'string' == typeof t[0] &&
                                tt.call(t, 'index') &&
                                ((e.index = t.index), (e.input = t.input));
                              return e;
                            })(e)),
                            !r)
                          )
                            return (function(t, n) {
                              var e = -1,
                                r = t.length;
                              n || (n = Array(r));
                              for (; ++e < r; ) n[e] = t[e];
                              return n;
                            })(e, c);
                        } else {
                          var v = Lt(e),
                            b = v == M || v == q;
                          if (Gt(e))
                            return (function(t, n) {
                              if (n) return t.slice();
                              var e = new t.constructor(t.length);
                              return t.copy(e), e;
                            })(e, r);
                          if (v == A || v == x || (b && !n)) {
                            if (Q(e)) return n ? e : {};
                            if (
                              ((c =
                                'function' !=
                                  typeof (p = b ? {} : e).constructor || Ct(p)
                                  ? {}
                                  : Kt((d = it(p)))
                                    ? ct(d)
                                    : {}),
                              !r)
                            )
                              return (
                                (l = a = e),
                                (s = (f = c) && Dt(l, Qt(l), f)),
                                Dt(a, Bt(a), s)
                              );
                          } else {
                            if (!W[v]) return n ? e : {};
                            c = (function(t, n, e, r) {
                              var o = t.constructor;
                              switch (n) {
                                case F:
                                  return Tt(t);
                                case j:
                                case O:
                                  return new o(+t);
                                case T:
                                  return (
                                    (h = t),
                                    (v = r ? Tt(h.buffer) : h.buffer),
                                    new h.constructor(
                                      v,
                                      h.byteOffset,
                                      h.byteLength,
                                    )
                                  );
                                case D:
                                case U:
                                case z:
                                case B:
                                case L:
                                case N:
                                case C:
                                case H:
                                case R:
                                  return (
                                    (p = t),
                                    (d = r ? Tt(p.buffer) : p.buffer),
                                    new p.constructor(d, p.byteOffset, p.length)
                                  );
                                case I:
                                  return (
                                    (f = t),
                                    (l = e),
                                    K(
                                      r ? l(X(f), !0) : X(f),
                                      G,
                                      new f.constructor(),
                                    )
                                  );
                                case E:
                                case S:
                                  return new o(t);
                                case k:
                                  return (
                                    ((s = new (a = t).constructor(
                                      a.source,
                                      V.exec(a),
                                    )).lastIndex =
                                      a.lastIndex),
                                    s
                                  );
                                case P:
                                  return (
                                    (i = t),
                                    (c = e),
                                    K(
                                      r ? c(Y(i), !0) : Y(i),
                                      J,
                                      new i.constructor(),
                                    )
                                  );
                                case $:
                                  return (u = t), Mt ? Object(Mt.call(u)) : {};
                              }
                              var u;
                              var i, c;
                              var a, s;
                              var f, l;
                              var p, d;
                              var h, v;
                            })(e, v, $t, r);
                          }
                        }
                        i || (i = new At());
                        var y,
                          _,
                          m,
                          g = i.get(e);
                        if (g) return g;
                        if ((i.set(e, c), !h))
                          var w = o
                            ? ((_ = Bt),
                              (m = Qt((y = e))),
                              Vt(y)
                                ? m
                                : (function(t, n) {
                                    for (
                                      var e = -1, r = n.length, o = t.length;
                                      ++e < r;

                                    )
                                      t[o + e] = n[e];
                                    return t;
                                  })(m, _(y)))
                            : Qt(e);
                        return (
                          (function(t, n) {
                            for (
                              var e = -1, r = t ? t.length : 0;
                              ++e < r && !1 !== n(t[e], e, t);

                            );
                          })(w || e, function(t, n) {
                            w && (t = e[(n = t)]),
                              Pt(c, n, $t(t, r, o, u, n, e, i));
                          }),
                          c
                        );
                      }
                      function Ft(t) {
                        return (
                          !(!Kt(t) || ((n = t), w && w in n)) &&
                          (Jt(t) || Q(t) ? et : c).test(Ht(t))
                        );
                        var n;
                      }
                      function Tt(t) {
                        var n = new t.constructor(t.byteLength);
                        return new ut(n).set(new ut(t)), n;
                      }
                      function Dt(t, n, e, r) {
                        e || (e = {});
                        for (var o = -1, u = n.length; ++o < u; ) {
                          var i = n[o],
                            c = r ? r(e[i], t[i], i, e, t) : void 0;
                          Pt(e, i, void 0 === c ? t[i] : c);
                        }
                        return e;
                      }
                      function Ut(t, n) {
                        var e,
                          r,
                          o = t.__data__;
                        return ('string' ==
                          (r = void 0 === (e = n) ? 'undefined' : s(e)) ||
                        'number' == r ||
                        'symbol' == r ||
                        'boolean' == r
                        ? '__proto__' !== e
                        : null === e)
                          ? o['string' == typeof n ? 'string' : 'hash']
                          : o.map;
                      }
                      function zt(t, n) {
                        var e,
                          r,
                          o = ((r = n), null == (e = t) ? void 0 : e[r]);
                        return Ft(o) ? o : void 0;
                      }
                      (qt.prototype.clear = function() {
                        this.__data__ = _t ? _t(null) : {};
                      }),
                        (qt.prototype.delete = function(t) {
                          return this.has(t) && delete this.__data__[t];
                        }),
                        (qt.prototype.get = function(t) {
                          var n = this.__data__;
                          if (_t) {
                            var e = n[t];
                            return e === r ? void 0 : e;
                          }
                          return tt.call(n, t) ? n[t] : void 0;
                        }),
                        (qt.prototype.has = function(t) {
                          var n = this.__data__;
                          return _t ? void 0 !== n[t] : tt.call(n, t);
                        }),
                        (qt.prototype.set = function(t, n) {
                          return (
                            (this.__data__[t] = _t && void 0 === n ? r : n),
                            this
                          );
                        }),
                        (It.prototype.clear = function() {
                          this.__data__ = [];
                        }),
                        (It.prototype.delete = function(t) {
                          var n = this.__data__,
                            e = St(n, t);
                          return !(
                            e < 0 ||
                            (e == n.length - 1 ? n.pop() : st.call(n, e, 1), 0)
                          );
                        }),
                        (It.prototype.get = function(t) {
                          var n = this.__data__,
                            e = St(n, t);
                          return e < 0 ? void 0 : n[e][1];
                        }),
                        (It.prototype.has = function(t) {
                          return -1 < St(this.__data__, t);
                        }),
                        (It.prototype.set = function(t, n) {
                          var e = this.__data__,
                            r = St(e, t);
                          return r < 0 ? e.push([t, n]) : (e[r][1] = n), this;
                        }),
                        (Et.prototype.clear = function() {
                          this.__data__ = {
                            hash: new qt(),
                            map: new (ht || It)(),
                            string: new qt(),
                          };
                        }),
                        (Et.prototype.delete = function(t) {
                          return Ut(this, t).delete(t);
                        }),
                        (Et.prototype.get = function(t) {
                          return Ut(this, t).get(t);
                        }),
                        (Et.prototype.has = function(t) {
                          return Ut(this, t).has(t);
                        }),
                        (Et.prototype.set = function(t, n) {
                          return Ut(this, t).set(t, n), this;
                        }),
                        (At.prototype.clear = function() {
                          this.__data__ = new It();
                        }),
                        (At.prototype.delete = function(t) {
                          return this.__data__.delete(t);
                        }),
                        (At.prototype.get = function(t) {
                          return this.__data__.get(t);
                        }),
                        (At.prototype.has = function(t) {
                          return this.__data__.has(t);
                        }),
                        (At.prototype.set = function(t, n) {
                          var e = this.__data__;
                          if (e instanceof It) {
                            var r = e.__data__;
                            if (!ht || r.length < o - 1)
                              return r.push([t, n]), this;
                            e = this.__data__ = new Et(r);
                          }
                          return e.set(t, n), this;
                        });
                      var Bt = ft
                          ? v(ft, Object)
                          : function() {
                              return [];
                            },
                        Lt = function(t) {
                          return nt.call(t);
                        };
                      function Nt(t, n) {
                        return (
                          !!(n = null == n ? e : n) &&
                          ('number' == typeof t || a.test(t)) &&
                          -1 < t &&
                          t % 1 == 0 &&
                          t < n
                        );
                      }
                      function Ct(t) {
                        var n = t && t.constructor;
                        return (
                          t === (('function' == typeof n && n.prototype) || m)
                        );
                      }
                      function Ht(t) {
                        if (null != t) {
                          try {
                            return Z.call(t);
                          } catch (t) {}
                          try {
                            return t + '';
                          } catch (t) {}
                        }
                        return '';
                      }
                      function Rt(t, n) {
                        return t === n || (t != t && n != n);
                      }
                      ((dt && Lt(new dt(new ArrayBuffer(1))) != T) ||
                        (ht && Lt(new ht()) != I) ||
                        (vt && Lt(vt.resolve()) != u) ||
                        (bt && Lt(new bt()) != P) ||
                        (yt && Lt(new yt()) != i)) &&
                        (Lt = function(t) {
                          var n = nt.call(t),
                            e = n == A ? t.constructor : void 0,
                            r = e ? Ht(e) : void 0;
                          if (r)
                            switch (r) {
                              case mt:
                                return T;
                              case gt:
                                return I;
                              case wt:
                                return u;
                              case xt:
                                return P;
                              case jt:
                                return i;
                            }
                          return n;
                        });
                      var Vt = Array.isArray;
                      function Wt(t) {
                        return (
                          null != t &&
                          ('number' == typeof (n = t.length) &&
                            -1 < n &&
                            n % 1 == 0 &&
                            n <= e) &&
                          !Jt(t)
                        );
                        var n;
                      }
                      var Gt =
                        lt ||
                        function() {
                          return !1;
                        };
                      function Jt(t) {
                        var n = Kt(t) ? nt.call(t) : '';
                        return n == M || n == q;
                      }
                      function Kt(t) {
                        var n = void 0 === t ? 'undefined' : s(t);
                        return !!t && ('object' == n || 'function' == n);
                      }
                      function Qt(t) {
                        return Wt(t)
                          ? kt(t)
                          : (function(t) {
                              if (!Ct(t)) return pt(t);
                              var n = [];
                              for (var e in Object(t))
                                tt.call(t, e) &&
                                  'constructor' != e &&
                                  n.push(e);
                              return n;
                            })(t);
                      }
                      Xt.exports = function(t) {
                        return $t(t, !0, !0);
                      };
                    }.call(
                      this,
                      'undefined' != typeof global
                        ? global
                        : 'undefined' != typeof self
                          ? self
                          : 'undefined' != typeof window
                            ? window
                            : {},
                    ));
                  },
                  {},
                ],
                34: [
                  function(t, n, e) {
                    'use strict';
                    n.exports = function(t, n) {
                      n || (n = [0, '']), (t = String(t));
                      var e = parseFloat(t, 10);
                      return (
                        (n[0] = e),
                        (n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || ''),
                        n
                      );
                    };
                  },
                  {},
                ],
                35: [
                  function(t, n, e) {
                    'use strict';
                    Object.defineProperty(e, '__esModule', { value: !0 }),
                      (e.create = void 0);
                    var r = o(t('parse-unit')),
                      u = o(t('lodash.clonedeep')),
                      i = o(t('eases'));
                    function o(t) {
                      return t && t.__esModule ? t : { default: t };
                    }
                    var c,
                      a,
                      s,
                      f = [],
                      l = function() {
                        return (
                          document.scrollingElement || document.documentElement
                        ).scrollTop;
                      },
                      p = function(t) {
                        return !1 === isNaN((0, r.default)(t)[0]);
                      },
                      d = function(t) {
                        var n = (0, r.default)(t);
                        return { value: n[0], unit: n[1] };
                      },
                      h = function(t) {
                        return null !== String(t).match(/^[a-z]+-[a-z]+$/);
                      },
                      v = function(t, n) {
                        var e =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : l(),
                          r =
                            3 < arguments.length && void 0 !== arguments[3]
                              ? arguments[3]
                              : window.innerHeight || window.outerHeight,
                          o = n.getBoundingClientRect(),
                          u = t.match(/^[a-z]+/)[0],
                          i = t.match(/[a-z]+$/)[0],
                          c = 0;
                        return (
                          'top' === i && (c -= 0),
                          'middle' === i && (c -= r / 2),
                          'bottom' === i && (c -= r),
                          'top' === u && (c += o.top + e),
                          'middle' === u && (c += o.top + e + o.height / 2),
                          'bottom' === u && (c += o.top + e + o.height),
                          c + 'px'
                        );
                      },
                      b = function(t) {
                        var n,
                          e,
                          r =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : l(),
                          a = t.getData(),
                          o = a.to.value - a.from.value,
                          u = (r - a.from.value) / (o / 100),
                          s = Math.min(Math.max(u, 0), 100),
                          i = ((n = a.direct),
                          (e = {
                            global: document.documentElement,
                            elem: a.elem,
                            direct: a.direct,
                          }),
                          !0 === n
                            ? e.elem
                            : n instanceof HTMLElement == 1
                              ? e.direct
                              : e.global),
                          c = Object.keys(a.props).reduce(function(t, n) {
                            var e = a.props[n],
                              r = e.from.unit || e.to.unit,
                              o = e.from.value - e.to.value,
                              u = e.timing(s / 100),
                              i = e.from.value - o * u,
                              c = Math.round(1e4 * i) / 1e4;
                            return (t[n] = c + r), t;
                          }, {}),
                          f = u < 0 || 100 < u;
                        return (
                          !0 === (0 <= u && u <= 100) && a.inside(t, u, c),
                          !0 === f && a.outside(t, u, c),
                          { elem: i, props: c }
                        );
                      },
                      y = function(r, o) {
                        Object.keys(o).forEach(function(t) {
                          return (
                            (n = r),
                            (e = { key: t, value: o[t] }),
                            void n.style.setProperty(e.key, e.value)
                          );
                          var n, e;
                        });
                      };
                    e.create = function(t) {
                      var n = null,
                        e = !1,
                        r = {
                          isActive: function() {
                            return e;
                          },
                          getData: function() {
                            return n;
                          },
                          calculate: function() {
                            n = (function() {
                              var e =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              if (null == (e = (0, u.default)(e)).from)
                                throw new Error('Missing property `from`');
                              if (null == e.to)
                                throw new Error('Missing property `to`');
                              if (
                                (null == e.inside && (e.inside = function() {}),
                                null == e.outside &&
                                  (e.outside = function() {}),
                                !0 === e.direct && null == e.elem)
                              )
                                throw new Error(
                                  'Property `elem` required when `direct` is true',
                                );
                              if (
                                (!0 !== e.direct &&
                                  e.direct instanceof HTMLElement == 0 &&
                                  (e.direct = !1),
                                !1 !== e.track && (e.track = !0),
                                'function' != typeof e.inside)
                              )
                                throw new Error(
                                  'Property `inside` must be a function',
                                );
                              if ('function' != typeof e.outside)
                                throw new Error(
                                  'Property `outside` must be a function',
                                );
                              if (null == e.elem) {
                                if (!1 === p(e.from))
                                  throw new Error(
                                    'Property `from` must be a absolute value when no `elem` has been provided',
                                  );
                                if (!1 === p(e.to))
                                  throw new Error(
                                    'Property `to` must be a absolute value when no `elem` has been provided',
                                  );
                              } else
                                !0 === h(e.from) &&
                                  (e.from = v(e.from, e.elem)),
                                  !0 === h(e.to) && (e.to = v(e.to, e.elem));
                              return (
                                (e.from = d(e.from)),
                                (e.to = d(e.to)),
                                null == e.props && (e.props = {}),
                                Object.keys(e.props).forEach(function(t) {
                                  var n = e.props[t];
                                  if (!1 === p(n.from))
                                    throw new Error(
                                      'Property `from` of prop must be a absolute value',
                                    );
                                  if (!1 === p(n.to))
                                    throw new Error(
                                      'Property `from` of prop must be a absolute value',
                                    );
                                  if (
                                    ((n.from = d(n.from)),
                                    (n.to = d(n.to)),
                                    'string' == typeof n.timing &&
                                      null == i.default[n.timing])
                                  )
                                    throw new Error(
                                      'Unknown timing for property `timing` of prop',
                                    );
                                  null == n.timing &&
                                    (n.timing = i.default.linear),
                                    'string' == typeof n.timing &&
                                      (n.timing = i.default[n.timing]);
                                }),
                                e
                              );
                            })(t);
                          },
                          update: function() {
                            var t = b(r),
                              n = t.elem,
                              e = t.props;
                            return y(n, e), e;
                          },
                          start: function() {
                            e = !0;
                          },
                          stop: function() {
                            e = !1;
                          },
                          destroy: function() {
                            f[o] = void 0;
                          },
                        },
                        o = f.push(r) - 1;
                      return r.calculate(), r;
                    };
                    !(function t(n, e) {
                      var r = function() {
                          requestAnimationFrame(function() {
                            return t(n, e);
                          });
                        },
                        o = f.filter(function(t) {
                          return null != t && t.isActive();
                        });
                      if (0 === o.length) return r();
                      var u = l();
                      if (e === u) return r();
                      (e = u),
                        o
                          .map(function(t) {
                            return b(t, u);
                          })
                          .forEach(function(t) {
                            var n = t.elem,
                              e = t.props;
                            return y(n, e);
                          }),
                        r();
                    })(),
                      window.addEventListener(
                        'resize',
                        ((c = function() {
                          f
                            .filter(function(t) {
                              return null != t && t.getData().track;
                            })
                            .forEach(function(t) {
                              t.calculate(), t.update();
                            });
                        }),
                        (a = 50),
                        (s = null),
                        function() {
                          for (
                            var t = arguments.length, n = Array(t), e = 0;
                            e < t;
                            e++
                          )
                            n[e] = arguments[e];
                          clearTimeout(s),
                            (s = setTimeout(function() {
                              return c.apply(void 0, n);
                            }, a));
                        }),
                      );
                  },
                  { eases: 19, 'lodash.clonedeep': 33, 'parse-unit': 34 },
                ],
              },
              {},
              [35],
            )(35);
          });
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js',
          ),
        ));

        /***/
      },

    /***/ './node_modules/document-ready/index.js':
      /*!**********************************************!*\
  !*** ./node_modules/document-ready/index.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var assert = __webpack_require__(
          /*! assert */ './node_modules/assert/assert.js',
        );

        module.exports = ready;

        function ready(callback) {
          assert.notEqual(
            typeof document,
            'undefined',
            'document-ready only runs in the browser',
          );
          var state = document.readyState;
          if (state === 'complete' || state === 'interactive') {
            return setTimeout(callback, 0);
          }

          document.addEventListener('DOMContentLoaded', function onLoad() {
            callback();
          });
        }

        /***/
      },

    /***/ './node_modules/process/browser.js':
      /*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // shim for using process in browser
        var process = (module.exports = {});

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined');
        }
        (function() {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          }
          // if setTimeout wasn't available but was latter defined
          if (
            (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
            setTimeout
          ) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          }
          // if clearTimeout wasn't available but was latter defined
          if (
            (cachedClearTimeout === defaultClearTimeout ||
              !cachedClearTimeout) &&
            clearTimeout
          ) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
            }
          }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }

        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;

          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }

        process.nextTick = function(fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };

        // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function(name) {
          return [];
        };

        process.binding = function(name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function() {
          return '/';
        };
        process.chdir = function(dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function() {
          return 0;
        };

        /***/
      },

    /***/ './node_modules/util/node_modules/inherits/inherits_browser.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        if (typeof Object.create === 'function') {
          // implementation from standard node.js 'util' module
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
          };
        } else {
          // old school shim for old browsers
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          };
        }

        /***/
      },

    /***/ './node_modules/util/support/isBufferBrowser.js':
      /*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function isBuffer(arg) {
          return (
            arg &&
            typeof arg === 'object' &&
            typeof arg.copy === 'function' &&
            typeof arg.fill === 'function' &&
            typeof arg.readUInt8 === 'function'
          );
        };

        /***/
      },

    /***/ './node_modules/util/util.js':
      /*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(global, process) {
          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.

          var formatRegExp = /%[sdj%]/g;
          exports.format = function(f) {
            if (!isString(f)) {
              var objects = [];
              for (var i = 0; i < arguments.length; i++) {
                objects.push(inspect(arguments[i]));
              }
              return objects.join(' ');
            }

            var i = 1;
            var args = arguments;
            var len = args.length;
            var str = String(f).replace(formatRegExp, function(x) {
              if (x === '%%') return '%';
              if (i >= len) return x;
              switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }
                default:
                  return x;
              }
            });
            for (var x = args[i]; i < len; x = args[++i]) {
              if (isNull(x) || !isObject(x)) {
                str += ' ' + x;
              } else {
                str += ' ' + inspect(x);
              }
            }
            return str;
          };

          // Mark that a method should not be used.
          // Returns a modified function which warns once by default.
          // If --no-deprecation is set, then it is a no-op.
          exports.deprecate = function(fn, msg) {
            // Allow for deprecating things in the process of starting up.
            if (isUndefined(global.process)) {
              return function() {
                return exports.deprecate(fn, msg).apply(this, arguments);
              };
            }

            if (process.noDeprecation === true) {
              return fn;
            }

            var warned = false;
            function deprecated() {
              if (!warned) {
                if (process.throwDeprecation) {
                  throw new Error(msg);
                } else if (process.traceDeprecation) {
                  console.trace(msg);
                } else {
                  console.error(msg);
                }
                warned = true;
              }
              return fn.apply(this, arguments);
            }

            return deprecated;
          };

          var debugs = {};
          var debugEnviron;
          exports.debuglog = function(set) {
            if (isUndefined(debugEnviron))
              debugEnviron = process.env.NODE_DEBUG || '';
            set = set.toUpperCase();
            if (!debugs[set]) {
              if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
                var pid = process.pid;
                debugs[set] = function() {
                  var msg = exports.format.apply(exports, arguments);
                  console.error('%s %d: %s', set, pid, msg);
                };
              } else {
                debugs[set] = function() {};
              }
            }
            return debugs[set];
          };

          /**
           * Echos the value of a value. Trys to print the value out
           * in the best way possible given the different types.
           *
           * @param {Object} obj The object to print out.
           * @param {Object} opts Optional options object that alters the output.
           */
          /* legacy: obj, showHidden, depth, colors*/
          function inspect(obj, opts) {
            // default options
            var ctx = {
              seen: [],
              stylize: stylizeNoColor,
            };
            // legacy...
            if (arguments.length >= 3) ctx.depth = arguments[2];
            if (arguments.length >= 4) ctx.colors = arguments[3];
            if (isBoolean(opts)) {
              // legacy...
              ctx.showHidden = opts;
            } else if (opts) {
              // got an "options" object
              exports._extend(ctx, opts);
            }
            // set default options
            if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
            if (isUndefined(ctx.depth)) ctx.depth = 2;
            if (isUndefined(ctx.colors)) ctx.colors = false;
            if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
            if (ctx.colors) ctx.stylize = stylizeWithColor;
            return formatValue(ctx, obj, ctx.depth);
          }
          exports.inspect = inspect;

          // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
          inspect.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          };

          // Don't use 'blue' not visible on cmd.exe
          inspect.styles = {
            special: 'cyan',
            number: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            date: 'magenta',
            // "name": intentionally not styling
            regexp: 'red',
          };

          function stylizeWithColor(str, styleType) {
            var style = inspect.styles[styleType];

            if (style) {
              return (
                '\u001b[' +
                inspect.colors[style][0] +
                'm' +
                str +
                '\u001b[' +
                inspect.colors[style][1] +
                'm'
              );
            } else {
              return str;
            }
          }

          function stylizeNoColor(str, styleType) {
            return str;
          }

          function arrayToHash(array) {
            var hash = {};

            array.forEach(function(val, idx) {
              hash[val] = true;
            });

            return hash;
          }

          function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (
              ctx.customInspect &&
              value &&
              isFunction(value.inspect) &&
              // Filter out the util module, it's inspect function is special
              value.inspect !== exports.inspect &&
              // Also filter out any prototype objects using the circular check.
              !(value.constructor && value.constructor.prototype === value)
            ) {
              var ret = value.inspect(recurseTimes, ctx);
              if (!isString(ret)) {
                ret = formatValue(ctx, ret, recurseTimes);
              }
              return ret;
            }

            // Primitive types cannot have properties
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
              return primitive;
            }

            // Look up the keys of the object.
            var keys = Object.keys(value);
            var visibleKeys = arrayToHash(keys);

            if (ctx.showHidden) {
              keys = Object.getOwnPropertyNames(value);
            }

            // IE doesn't make error fields non-enumerable
            // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
            if (
              isError(value) &&
              (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)
            ) {
              return formatError(value);
            }

            // Some type of object without properties can be shortcutted.
            if (keys.length === 0) {
              if (isFunction(value)) {
                var name = value.name ? ': ' + value.name : '';
                return ctx.stylize('[Function' + name + ']', 'special');
              }
              if (isRegExp(value)) {
                return ctx.stylize(
                  RegExp.prototype.toString.call(value),
                  'regexp',
                );
              }
              if (isDate(value)) {
                return ctx.stylize(Date.prototype.toString.call(value), 'date');
              }
              if (isError(value)) {
                return formatError(value);
              }
            }

            var base = '',
              array = false,
              braces = ['{', '}'];

            // Make Array say that they are Array
            if (isArray(value)) {
              array = true;
              braces = ['[', ']'];
            }

            // Make functions say that they are functions
            if (isFunction(value)) {
              var n = value.name ? ': ' + value.name : '';
              base = ' [Function' + n + ']';
            }

            // Make RegExps say that they are RegExps
            if (isRegExp(value)) {
              base = ' ' + RegExp.prototype.toString.call(value);
            }

            // Make dates with properties first say the date
            if (isDate(value)) {
              base = ' ' + Date.prototype.toUTCString.call(value);
            }

            // Make error with message first say the error
            if (isError(value)) {
              base = ' ' + formatError(value);
            }

            if (keys.length === 0 && (!array || value.length == 0)) {
              return braces[0] + base + braces[1];
            }

            if (recurseTimes < 0) {
              if (isRegExp(value)) {
                return ctx.stylize(
                  RegExp.prototype.toString.call(value),
                  'regexp',
                );
              } else {
                return ctx.stylize('[Object]', 'special');
              }
            }

            ctx.seen.push(value);

            var output;
            if (array) {
              output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
              output = keys.map(function(key) {
                return formatProperty(
                  ctx,
                  value,
                  recurseTimes,
                  visibleKeys,
                  key,
                  array,
                );
              });
            }

            ctx.seen.pop();

            return reduceToSingleString(output, base, braces);
          }

          function formatPrimitive(ctx, value) {
            if (isUndefined(value))
              return ctx.stylize('undefined', 'undefined');
            if (isString(value)) {
              var simple =
                "'" +
                JSON.stringify(value)
                  .replace(/^"|"$/g, '')
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return ctx.stylize(simple, 'string');
            }
            if (isNumber(value)) return ctx.stylize('' + value, 'number');
            if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
            // For some reason typeof null is "object", so special case here.
            if (isNull(value)) return ctx.stylize('null', 'null');
          }

          function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
          }

          function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];
            for (var i = 0, l = value.length; i < l; ++i) {
              if (hasOwnProperty(value, String(i))) {
                output.push(
                  formatProperty(
                    ctx,
                    value,
                    recurseTimes,
                    visibleKeys,
                    String(i),
                    true,
                  ),
                );
              } else {
                output.push('');
              }
            }
            keys.forEach(function(key) {
              if (!key.match(/^\d+$/)) {
                output.push(
                  formatProperty(
                    ctx,
                    value,
                    recurseTimes,
                    visibleKeys,
                    key,
                    true,
                  ),
                );
              }
            });
            return output;
          }

          function formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            key,
            array,
          ) {
            var name, str, desc;
            desc = Object.getOwnPropertyDescriptor(value, key) || {
              value: value[key],
            };
            if (desc.get) {
              if (desc.set) {
                str = ctx.stylize('[Getter/Setter]', 'special');
              } else {
                str = ctx.stylize('[Getter]', 'special');
              }
            } else {
              if (desc.set) {
                str = ctx.stylize('[Setter]', 'special');
              }
            }
            if (!hasOwnProperty(visibleKeys, key)) {
              name = '[' + key + ']';
            }
            if (!str) {
              if (ctx.seen.indexOf(desc.value) < 0) {
                if (isNull(recurseTimes)) {
                  str = formatValue(ctx, desc.value, null);
                } else {
                  str = formatValue(ctx, desc.value, recurseTimes - 1);
                }
                if (str.indexOf('\n') > -1) {
                  if (array) {
                    str = str
                      .split('\n')
                      .map(function(line) {
                        return '  ' + line;
                      })
                      .join('\n')
                      .substr(2);
                  } else {
                    str =
                      '\n' +
                      str
                        .split('\n')
                        .map(function(line) {
                          return '   ' + line;
                        })
                        .join('\n');
                  }
                }
              } else {
                str = ctx.stylize('[Circular]', 'special');
              }
            }
            if (isUndefined(name)) {
              if (array && key.match(/^\d+$/)) {
                return str;
              }
              name = JSON.stringify('' + key);
              if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                name = name.substr(1, name.length - 2);
                name = ctx.stylize(name, 'name');
              } else {
                name = name
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'");
                name = ctx.stylize(name, 'string');
              }
            }

            return name + ': ' + str;
          }

          function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function(prev, cur) {
              numLinesEst++;
              if (cur.indexOf('\n') >= 0) numLinesEst++;
              return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
            }, 0);

            if (length > 60) {
              return (
                braces[0] +
                (base === '' ? '' : base + '\n ') +
                ' ' +
                output.join(',\n  ') +
                ' ' +
                braces[1]
              );
            }

            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
          }

          // NOTE: These type checking functions intentionally don't use `instanceof`
          // because it is fragile and can be easily faked with `Object.create()`.
          function isArray(ar) {
            return Array.isArray(ar);
          }
          exports.isArray = isArray;

          function isBoolean(arg) {
            return typeof arg === 'boolean';
          }
          exports.isBoolean = isBoolean;

          function isNull(arg) {
            return arg === null;
          }
          exports.isNull = isNull;

          function isNullOrUndefined(arg) {
            return arg == null;
          }
          exports.isNullOrUndefined = isNullOrUndefined;

          function isNumber(arg) {
            return typeof arg === 'number';
          }
          exports.isNumber = isNumber;

          function isString(arg) {
            return typeof arg === 'string';
          }
          exports.isString = isString;

          function isSymbol(arg) {
            return typeof arg === 'symbol';
          }
          exports.isSymbol = isSymbol;

          function isUndefined(arg) {
            return arg === void 0;
          }
          exports.isUndefined = isUndefined;

          function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
          }
          exports.isRegExp = isRegExp;

          function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
          }
          exports.isObject = isObject;

          function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
          }
          exports.isDate = isDate;

          function isError(e) {
            return (
              isObject(e) &&
              (objectToString(e) === '[object Error]' || e instanceof Error)
            );
          }
          exports.isError = isError;

          function isFunction(arg) {
            return typeof arg === 'function';
          }
          exports.isFunction = isFunction;

          function isPrimitive(arg) {
            return (
              arg === null ||
              typeof arg === 'boolean' ||
              typeof arg === 'number' ||
              typeof arg === 'string' ||
              typeof arg === 'symbol' || // ES6 symbol
              typeof arg === 'undefined'
            );
          }
          exports.isPrimitive = isPrimitive;

          exports.isBuffer = __webpack_require__(
            /*! ./support/isBuffer */ './node_modules/util/support/isBufferBrowser.js',
          );

          function objectToString(o) {
            return Object.prototype.toString.call(o);
          }

          function pad(n) {
            return n < 10 ? '0' + n.toString(10) : n.toString(10);
          }

          var months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ];

          // 26 Feb 16:19:34
          function timestamp() {
            var d = new Date();
            var time = [
              pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds()),
            ].join(':');
            return [d.getDate(), months[d.getMonth()], time].join(' ');
          }

          // log is just a thin wrapper to console.log that prepends a timestamp
          exports.log = function() {
            console.log(
              '%s - %s',
              timestamp(),
              exports.format.apply(exports, arguments),
            );
          };

          /**
           * Inherit the prototype methods from one constructor into another.
           *
           * The Function.prototype.inherits from lang.js rewritten as a standalone
           * function (not on Function.prototype). NOTE: If this file is to be loaded
           * during bootstrapping this function needs to be rewritten using some native
           * functions as prototype setup using normal JavaScript does not work as
           * expected during bootstrapping (see mirror.js in r114903).
           *
           * @param {function} ctor Constructor function which needs to inherit the
           *     prototype.
           * @param {function} superCtor Constructor function to inherit prototype from.
           */
          exports.inherits = __webpack_require__(
            /*! inherits */ './node_modules/util/node_modules/inherits/inherits_browser.js',
          );

          exports._extend = function(origin, add) {
            // Don't do anything if add isn't an object
            if (!add || !isObject(add)) return origin;

            var keys = Object.keys(add);
            var i = keys.length;
            while (i--) {
              origin[keys[i]] = add[keys[i]];
            }
            return origin;
          };

          function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js',
          ),
          __webpack_require__(
            /*! ./../process/browser.js */ './node_modules/process/browser.js',
          ),
        ));

        /***/
      },

    /***/ './node_modules/webpack/buildin/global.js':
      /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var g;

        // This works in non-strict mode
        g = (function() {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || Function('return this')() || (1, eval)('this');
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === 'object') g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },

    /***/ './src/css/episode-list.css':
      /*!**********************************!*\
  !*** ./src/css/episode-list.css ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/episode-single.css':
      /*!************************************!*\
  !*** ./src/css/episode-single.css ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/footer.css':
      /*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/header.css':
      /*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/home.css':
      /*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/icons.css':
      /*!***************************!*\
  !*** ./src/css/icons.css ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/listen-on.css':
      /*!*******************************!*\
  !*** ./src/css/listen-on.css ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/rich-text.css':
      /*!*******************************!*\
  !*** ./src/css/rich-text.css ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/social.css':
      /*!****************************!*\
  !*** ./src/css/social.css ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/css/style.css':
      /*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // removed by extract-text-webpack-plugin
        /***/
      },

    /***/ './src/js/app.js':
      /*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _documentReady = __webpack_require__(
          /*! document-ready */ './node_modules/document-ready/index.js',
        );

        var _documentReady2 = _interopRequireDefault(_documentReady);

        var _headerGradient = __webpack_require__(
          /*! ./header-gradient/ */ './src/js/header-gradient/index.js',
        );

        var _headerGradient2 = _interopRequireDefault(_headerGradient);

        __webpack_require__(/*! ./style */ './src/js/style.js');

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        (0, _documentReady2.default)(function() {
          var header = new _headerGradient2.default('#header');
          header.init();

          var episodes = Array.from(
            document.querySelectorAll('.episode-single'),
          );

          var handleClick = function handleClick(e) {
            /* e.preventDefault(); */
            var active = document.querySelector('.active');
            if (active) {
              active.classList.remove('active');
            }
            e.currentTarget.classList.add('active');
            e.currentTarget.scrollIntoView({
              behavior: 'instant',
              block: 'start',
              inline: 'end',
            });
            window.scrollBy(0, -75);
          };

          episodes.forEach(function(node) {
            node.addEventListener('click', handleClick);
          });
        });

        /***/
      },

    /***/ './src/js/header-gradient/index.js':
      /*!*****************************************!*\
  !*** ./src/js/header-gradient/index.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _basicscroll = __webpack_require__(
          /*! basicscroll */ './node_modules/basicscroll/dist/basicScroll.min.js',
        );

        var basicScroll = _interopRequireWildcard(_basicscroll);

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        var gradientBG =
          '\n  background: rgba(255, 255, 255, var(--header-background-opacity));\n';

        var HeaderGradient = (function() {
          function HeaderGradient(selector) {
            _classCallCheck(this, HeaderGradient);

            this.el = document.querySelector(selector);
            this.init = this.init.bind(this);
          }

          _createClass(HeaderGradient, [
            {
              key: 'init',
              value: function init() {
                var el = this.el;

                el.setAttribute('style', gradientBG);

                this.instance = basicScroll.create({
                  elem: el,
                  from: '350',
                  to: '450',
                  direct: true,
                  props: {
                    '--header-background-opacity': {
                      from: '0.0',
                      to: '1.0',
                    },
                  },
                });

                this.instanceNav = basicScroll.create({
                  elem: document.querySelector('#header nav'),
                  from: '450',
                  to: '500',
                  direct: true,
                  props: {
                    '--nav-opacity': {
                      from: '0.0',
                      to: '1.0',
                    },
                  },
                });

                this.instance.start();
                this.instanceNav.start();
              },
            },
          ]);

          return HeaderGradient;
        })();

        exports.default = HeaderGradient;

        /***/
      },

    /***/ './src/js/style.js':
      /*!*************************!*\
  !*** ./src/js/style.js ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        __webpack_require__(/*! ../css/style.css */ './src/css/style.css');

        __webpack_require__(/*! ../css/icons.css */ './src/css/icons.css');

        __webpack_require__(
          /*! ../css/rich-text.css */ './src/css/rich-text.css',
        );

        __webpack_require__(/*! ../css/header.css */ './src/css/header.css');

        __webpack_require__(/*! ../css/footer.css */ './src/css/footer.css');

        __webpack_require__(/*! ../css/social.css */ './src/css/social.css');

        __webpack_require__(
          /*! ../css/listen-on.css */ './src/css/listen-on.css',
        );

        __webpack_require__(/*! ../css/home.css */ './src/css/home.css');

        __webpack_require__(
          /*! ../css/episode-single.css */ './src/css/episode-single.css',
        );

        __webpack_require__(
          /*! ../css/episode-list.css */ './src/css/episode-list.css',
        );

        /***/
      },

    /******/
  },
);
//# sourceMappingURL=main.map
