export declare const suss: (it: any) => {
    map: (func: any) => any;
    filter: (func: any) => any;
    reduce: (func: any, initial: any) => {};
    len: () => number;
    flatten: () => any;
    forEach: (func: any) => void;
    lift: (func: any) => any;
    take: (n: number) => any;
    list: () => {}[];
    [Symbol.iterator]: () => IterableIterator<any>;
};
