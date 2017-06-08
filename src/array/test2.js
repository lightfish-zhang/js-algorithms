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

a.forEach((element)=>{
    element.forEach((element2)=>{
        c.forEach((_c)=>{
            if(typeof element2.key === 'string' && element2.key.indexOf(_c) !== -1){
                if(!(b[_c] instanceof Array)){
                    b[_c] = [];
                }
                b[_c].push(element2);
            }
        })
        
    })
})

console.log(b);

