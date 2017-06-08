const a = [
  [{key:'aaaa'},{key:'aaaa'},{key:'aaa'}],
  [{key:'aaaa'},{key:'aaaa'},{key:'aaa'}],
  [{key:'bbb'},{key:'bbbbbb'},{key:'bbbb'}],
  [{key:'cccccc'},{key:'c'},{key:'ccc'}],
  [{key:'cccccc'},{key:'c'},{key:'ccc'}],
  [{key:'aaaa'},{key:'aaaa'},{key:'aaa'}],
  [{key:'bbb'},{key:'bbbbbb'},{key:'bbbb'}],
  [{key:'bbb'},{key:'bbbbbb'},{key:'bbbb'}],
  [{key:'cccccc'},{key:'c'},{key:'ccc'}],
  [{key:'cccccc'},{key:'c'},{key:'ccc'}],
  [{key:'aaaa'},{key:'aaaa'},{key:'aaa'}],
  [{key:'bbb'},{key:'bbbbbb'},{key:'bbbb'}]
];

const b = {};

const c = ['a', 'b', 'c'];

const flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);

flatten(a).forEach((element) => {
    if(typeof element.key === 'string' && element.key.indexOf(_c) !== -1){
        if(!(b[_c] instanceof Array)){
            b[_c] = [];
        }
        b[_c].push(element);
    }
});

console.log(b);