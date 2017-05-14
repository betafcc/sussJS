export type F0<A> = () => A;
export type F1<A,B> = (a: A) => B;
export type F2<A,B,C> = (a: A) => F1<B,C>;


export function call<T>(f: F0<T>) {
    return f();
}

export function id<T>(arg: T): T {
    return arg;
}

export function compose<A,B,C>(f: F1<B,C>) {
    return (g: F1<A,B>) => (arg: A) => f(g(arg));
}

export function map<A,B>(f: F1<A,B>) {
    return function* (it: Iterable<A>): IterableIterator<B> {
        for (const el of it)
            yield f(el);
    };
}

export function filter<T>(f: F1<T,boolean>) {
    return function* (it: Iterable<T>): IterableIterator<T> {
        for (const el of it)
            if (f(el) === true)
                yield el;
    };
}

export function reduce<A,B>(f: F2<A,B,A>) {
    return (initial: A) => (it: Iterable<B>): A => {
        let acc = initial;
        for (const el of it)
            acc = f(acc)(el);
        return acc;
    };
}

export function pipe(...fs: any[]): any {
    return reduce(compose)(id)(fs.reverse());
}

export function flow(initial: any): any {
    return (...fs: any[]) => pipe(...fs)(initial);
}
