// TODO
// head, tail, init, last
// take, takeWhile, drop, dropWhile
// accumulate, replicateM,
import { F1 } from './functools';


export function* unit<T>(arg: T): Iterator<T> {
    yield arg;
}

export function len<T>(it: Iterable<T>): number {
  let acc = 0;
  for (const el of it)
    acc += 1;
  return acc;
}

export function* flatten<T>(highIt: Iterable<Iterable<T>>): Iterable<T> {
  for (const it of highIt)
    for (const el of it)
      yield el;
}

export function forEach<T>(f: F1<T,any>) {
  return (it: Iterable<T>): void => {
    for (const el of it)
      f(el);
  };
}

export function* repeat<T>(arg: T): Iterator<T> {
  while (true)
    yield arg;
}

export function take<T>(n: number) {
  return function* (it: Iterable<T>) {
    const g: Iterator<T> = it[Symbol.iterator]();

    for (let i = 0; i < n; i+=1)
      yield g.next().value;
  };
}

export function list<T>(it: Iterable<T>): Array<T> {
  return Array.from(it);
}
