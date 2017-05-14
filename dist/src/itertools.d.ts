import { F1 } from './functools';
export declare function unit<T>(arg: T): Iterator<T>;
export declare function len<T>(it: Iterable<T>): number;
export declare function flatten<T>(highIt: Iterable<Iterable<T>>): Iterable<T>;
export declare function forEach<T>(f: F1<T, any>): (it: Iterable<T>) => void;
export declare function repeat<T>(arg: T): Iterator<T>;
export declare function take<T>(n: number): (it: Iterable<T>) => IterableIterator<T>;
export declare function list<T>(it: Iterable<T>): Array<T>;
