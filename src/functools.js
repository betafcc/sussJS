import 'babel-polyfill';

const id   = (arg) =>
    arg;

const compose = (f) => (g) => (arg) =>
    f(g(arg));

const map = (func) =>
    function* (iterable) {
        for (const el of iterable)
            yield func(el);
    };

const filter = (func) =>
    function* (iterable) {
        for (const el of iterable)
            if (func(el) === true)
                yield el;
    };

const reduce = (func) =>
    (initial) =>
        (iterable) => {
            let acc = initial;
            for (const el of iterable)
                acc = func(acc)(el);
            return acc;
        };

const pipe = (...funcs) =>
    reduce(compose)(id)(funcs.reverse());

const flow = (initial) => (...funcs) =>
    pipe(...funcs)(initial);

export {
    id,
    compose,
    map,
    filter,
    reduce,
    pipe,
    flow,
};
