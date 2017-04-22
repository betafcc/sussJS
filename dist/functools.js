'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flow = exports.pipe = exports.reduce = exports.filter = exports.map = exports.compose = exports.id = undefined;

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

var id = function id(arg) {
    return arg;
};

var compose = function compose(f) {
    return function (g) {
        return function (arg) {
            return f(g(arg));
        };
    };
};

var map = function map(func) {
    return regeneratorRuntime.mark(function _callee(iterable) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, el;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 3;
                        _iterator = iterable[Symbol.iterator]();

                    case 5:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 12;
                            break;
                        }

                        el = _step.value;
                        _context.next = 9;
                        return func(el);

                    case 9:
                        _iteratorNormalCompletion = true;
                        _context.next = 5;
                        break;

                    case 12:
                        _context.next = 18;
                        break;

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context['catch'](3);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 18:
                        _context.prev = 18;
                        _context.prev = 19;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 21:
                        _context.prev = 21;

                        if (!_didIteratorError) {
                            _context.next = 24;
                            break;
                        }

                        throw _iteratorError;

                    case 24:
                        return _context.finish(21);

                    case 25:
                        return _context.finish(18);

                    case 26:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    });
};

var filter = function filter(func) {
    return regeneratorRuntime.mark(function _callee2(iterable) {
        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, el;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context2.prev = 3;
                        _iterator2 = iterable[Symbol.iterator]();

                    case 5:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context2.next = 13;
                            break;
                        }

                        el = _step2.value;

                        if (!(func(el) === true)) {
                            _context2.next = 10;
                            break;
                        }

                        _context2.next = 10;
                        return el;

                    case 10:
                        _iteratorNormalCompletion2 = true;
                        _context2.next = 5;
                        break;

                    case 13:
                        _context2.next = 19;
                        break;

                    case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2['catch'](3);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context2.t0;

                    case 19:
                        _context2.prev = 19;
                        _context2.prev = 20;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 22:
                        _context2.prev = 22;

                        if (!_didIteratorError2) {
                            _context2.next = 25;
                            break;
                        }

                        throw _iteratorError2;

                    case 25:
                        return _context2.finish(22);

                    case 26:
                        return _context2.finish(19);

                    case 27:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[3, 15, 19, 27], [20,, 22, 26]]);
    });
};

var reduce = function reduce(func) {
    return function (initial) {
        return function (iterable) {
            var acc = initial;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = iterable[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var el = _step3.value;

                    acc = func(acc)(el);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return acc;
        };
    };
};

var pipe = function pipe() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
    }

    return reduce(compose)(id)(funcs.reverse());
};

var flow = function flow(initial) {
    for (var _len2 = arguments.length, funcs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        funcs[_key2 - 1] = arguments[_key2];
    }

    return pipe.apply(undefined, funcs)(initial);
};

exports.id = id;
exports.compose = compose;
exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.pipe = pipe;
exports.flow = flow;