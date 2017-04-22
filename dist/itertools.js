'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forEach = exports.flatten = exports.len = exports.unit = undefined;

require('core-js/modules/es6.typed.array-buffer');

require('core-js/modules/es6.typed.int8-array');

require('core-js/modules/es6.typed.uint8-array');

require('core-js/modules/es6.typed.uint8-clamped-array');

require('core-js/modules/es6.typed.int16-array');

require('core-js/modules/es6.typed.uint16-array');

require('core-js/modules/es6.typed.int32-array');

require('core-js/modules/es6.typed.uint32-array');

require('core-js/modules/es6.typed.float32-array');

require('core-js/modules/es6.typed.float64-array');

require('core-js/modules/es6.map');

require('core-js/modules/es6.set');

require('core-js/modules/es6.weak-map');

require('core-js/modules/es6.weak-set');

require('core-js/modules/es6.reflect.apply');

require('core-js/modules/es6.reflect.construct');

require('core-js/modules/es6.reflect.define-property');

require('core-js/modules/es6.reflect.delete-property');

require('core-js/modules/es6.reflect.get');

require('core-js/modules/es6.reflect.get-own-property-descriptor');

require('core-js/modules/es6.reflect.get-prototype-of');

require('core-js/modules/es6.reflect.has');

require('core-js/modules/es6.reflect.is-extensible');

require('core-js/modules/es6.reflect.own-keys');

require('core-js/modules/es6.reflect.prevent-extensions');

require('core-js/modules/es6.reflect.set');

require('core-js/modules/es6.reflect.set-prototype-of');

require('core-js/modules/es6.promise');

require('core-js/modules/es6.symbol');

require('core-js/modules/es6.object.assign');

require('core-js/modules/es6.object.is');

require('core-js/modules/es6.object.set-prototype-of');

require('core-js/modules/es6.function.name');

require('core-js/modules/es6.string.raw');

require('core-js/modules/es6.string.from-code-point');

require('core-js/modules/es6.string.code-point-at');

require('core-js/modules/es6.string.repeat');

require('core-js/modules/es6.string.starts-with');

require('core-js/modules/es6.string.ends-with');

require('core-js/modules/es6.string.includes');

require('core-js/modules/es6.regexp.flags');

require('core-js/modules/es6.regexp.match');

require('core-js/modules/es6.regexp.replace');

require('core-js/modules/es6.regexp.split');

require('core-js/modules/es6.regexp.search');

require('core-js/modules/es6.array.from');

require('core-js/modules/es6.array.of');

require('core-js/modules/es6.array.copy-within');

require('core-js/modules/es6.array.find');

require('core-js/modules/es6.array.find-index');

require('core-js/modules/es6.array.fill');

require('core-js/modules/es6.array.iterator');

require('core-js/modules/es6.number.is-finite');

require('core-js/modules/es6.number.is-integer');

require('core-js/modules/es6.number.is-safe-integer');

require('core-js/modules/es6.number.is-nan');

require('core-js/modules/es6.number.epsilon');

require('core-js/modules/es6.number.min-safe-integer');

require('core-js/modules/es6.number.max-safe-integer');

require('core-js/modules/es6.math.acosh');

require('core-js/modules/es6.math.asinh');

require('core-js/modules/es6.math.atanh');

require('core-js/modules/es6.math.cbrt');

require('core-js/modules/es6.math.clz32');

require('core-js/modules/es6.math.cosh');

require('core-js/modules/es6.math.expm1');

require('core-js/modules/es6.math.fround');

require('core-js/modules/es6.math.hypot');

require('core-js/modules/es6.math.imul');

require('core-js/modules/es6.math.log1p');

require('core-js/modules/es6.math.log10');

require('core-js/modules/es6.math.log2');

require('core-js/modules/es6.math.sign');

require('core-js/modules/es6.math.sinh');

require('core-js/modules/es6.math.tanh');

require('core-js/modules/es6.math.trunc');

require('core-js/modules/es7.array.includes');

require('core-js/modules/es7.object.values');

require('core-js/modules/es7.object.entries');

require('core-js/modules/es7.object.get-own-property-descriptors');

require('core-js/modules/es7.string.pad-start');

require('core-js/modules/es7.string.pad-end');

require('core-js/modules/web.timers');

require('core-js/modules/web.immediate');

require('core-js/modules/web.dom.iterable');

require('regenerator-runtime/runtime');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO
// head, tail, init, last
// take, takeWhile, drop, dropWhile
// accumulate, replicateM
// Check haskell prelude for references


var unit = function unit(arg) {
    return _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return arg;

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};

var len = function len(iterable) {
    var acc = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;

            acc += 1;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return acc;
};

var flatten = regeneratorRuntime.mark(function flatten(highIterable) {
    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, iter, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, el;

    return regeneratorRuntime.wrap(function flatten$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context2.prev = 3;
                    _iterator2 = highIterable[Symbol.iterator]();

                case 5:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        _context2.next = 36;
                        break;
                    }

                    iter = _step2.value;
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    _context2.prev = 10;
                    _iterator3 = iter[Symbol.iterator]();

                case 12:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                        _context2.next = 19;
                        break;
                    }

                    el = _step3.value;
                    _context2.next = 16;
                    return el;

                case 16:
                    _iteratorNormalCompletion3 = true;
                    _context2.next = 12;
                    break;

                case 19:
                    _context2.next = 25;
                    break;

                case 21:
                    _context2.prev = 21;
                    _context2.t0 = _context2['catch'](10);
                    _didIteratorError3 = true;
                    _iteratorError3 = _context2.t0;

                case 25:
                    _context2.prev = 25;
                    _context2.prev = 26;

                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }

                case 28:
                    _context2.prev = 28;

                    if (!_didIteratorError3) {
                        _context2.next = 31;
                        break;
                    }

                    throw _iteratorError3;

                case 31:
                    return _context2.finish(28);

                case 32:
                    return _context2.finish(25);

                case 33:
                    _iteratorNormalCompletion2 = true;
                    _context2.next = 5;
                    break;

                case 36:
                    _context2.next = 42;
                    break;

                case 38:
                    _context2.prev = 38;
                    _context2.t1 = _context2['catch'](3);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context2.t1;

                case 42:
                    _context2.prev = 42;
                    _context2.prev = 43;

                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }

                case 45:
                    _context2.prev = 45;

                    if (!_didIteratorError2) {
                        _context2.next = 48;
                        break;
                    }

                    throw _iteratorError2;

                case 48:
                    return _context2.finish(45);

                case 49:
                    return _context2.finish(42);

                case 50:
                case 'end':
                    return _context2.stop();
            }
        }
    }, flatten, this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
});

var forEach = function forEach(func) {
    return function (iterable) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = iterable[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var el = _step4.value;

                func(el);
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
    };
};

exports.unit = unit;
exports.len = len;
exports.flatten = flatten;
exports.forEach = forEach;