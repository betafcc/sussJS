import 'babel-polyfill';
import { map, filter, reduce } from './functools.js';
import { flatten, len, forEach } from './itertools.js';


const iter = (iterable) =>
    ({
        map     : (func)          => iter(map(func)(iterable)),
        filter  : (func)          => iter(filter(func)(iterable)),
        reduce  : (func, initial) => reduce(func)(initial)(iterable),

        len     : ()              => len(iterable),
        flatten : ()              => iter(flatten(iterable)),
        forEach : (func)          => forEach(func)(iterable),

        lift    : (func)          => func(iterable),
        [Symbol.iterator] : function* () {
            yield* iterable;
        },
    });


export default iter;
