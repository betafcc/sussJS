import 'babel-polyfill';
// TODO
// head, tail, init, last
// take, takeWhile, drop, dropWhile
// accumulate, replicateM
// Check haskell prelude for references


const unit = (arg) =>
    ({
        *[Symbol.iterator]() {
            yield arg;
        }
    });

const len = (iterable) => {
    let acc = 0;
    for (const el of iterable)
        acc += 1;
    return acc;
};

const flatten = function* (highIterable) {
    for (const iter of highIterable)
        for (const el of iter)
            yield el;
};

const forEach = (func) =>
    (iterable) => {
        for (const el of iterable)
            func(el);
    };


export {
    unit,
    len,
    flatten,
    forEach,
};
