export declare type F0<A> = () => A;
export declare type F1<A, B> = (a: A) => B;
export declare type F2<A, B, C> = (a: A) => F1<B, C>;
export declare function call<T>(f: F0<T>): T;
export declare function id<T>(arg: T): T;
export declare function compose<A, B, C>(f: F1<B, C>): (g: F1<A, B>) => (arg: A) => C;
export declare function map<A, B>(f: F1<A, B>): (it: Iterable<A>) => IterableIterator<B>;
export declare function filter<T>(f: F1<T, boolean>): (it: Iterable<T>) => IterableIterator<T>;
export declare function reduce<A, B>(f: F2<A, B, A>): (initial: A) => (it: Iterable<B>) => A;
export declare function pipe(...fs: any[]): any;
export declare function flow(initial: any): any;