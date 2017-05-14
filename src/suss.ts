import { map, filter, reduce } from './functools';
import { flatten, len, forEach, take, list } from './itertools';


// class Suss<T> implements Iterable<T> {
//     constructor(private it: Iterable<T>) {}

//     *[Symbol.iterator](): Iterator<T> {
//         yield* this.it;
//     }

//     map<U>(f: F1<T,U>): Suss<U> {
//         return new Suss<U>(map(f)(this));
//     }

//     filter(f: F1<T,boolean>) {
//         return new Suss(filter(f)(this));
//     }

//     reduce<U>(f: F2<U,T,U>, initial: U): U {
//         return reduce(f)(initial)(this);
//     }


//     len(): number {
//         return len(this);
//     }

//     flatten() {
//         return new Suss(flatten(this));
//     }

//     // forEach(func) {
//     //     forEach(func)(this.it);
//     // }

//     // lift(func) {
//     //     return func(it);
//     // }
// }

// class Suss<Iterable<T>> extends Suss<T> {

// }

export const suss = (it: any) =>
    ({
        map     : (func: any)          => suss(map(func)(it)),
        filter  : (func: any)          => suss(filter(func)(it)),
        reduce  : (func: any, initial: any) => reduce(func)(initial)(it),

        len     : ()              => len(it),
        flatten : ()              => suss(flatten(it)),
        forEach : (func: any)     => forEach(func)(it),

        lift    : (func: any)     => func(it),
        take    : (n: number)     => suss(take(10)(it)),

        list    : ()              => list(it),

        [Symbol.iterator] : function* () {
            yield* it;
        },
    });
