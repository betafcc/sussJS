# süß/JS

**süß** &nbsp; _/zyːs/_ <br>
&emsp; _adj_ <br>
&emsp;&emsp; sweet, cute <br>
&emsp; _noun_ <br>
&emsp;&emsp; the sound iteration makes over pure functional pipes

<!-- Micro Framework for Lazy Iterations in JS -->

Install
-------

    npm install @betafcc/suss

Usage
-----

Get an iterator/generator/iterable:
```js
// Generate all Natural numbers
function* naturals() {
   for (let i = 0; true; i+=1)
       yield i;
}
```

Use the Fluent API:
```js
import suss from '@betafcc/suss';

// Log all even squares
suss(naturals())
    .map(x => x*x)
    .filter(x => x % 2 === 0)
    .forEach(el => console.log(el));
```

Use the flow/pipe API:
```js
import { flow,
         map, filter, forEach } from '@betafcc/suss';

// Log all even squares
flow(naturals(),
    map(x => x*x),
    filter(x => x % 2 === 0),
    forEach(el => console.log(el)),
);
```
