const a = [
  [{key:'a'},{key:'a'},{key:'a'}],
  [{key:'a'},{key:'a'},{key:'a'}],
  [{key:'b'},{key:'b'},{key:'b'}],
  [{key:'c'},{key:'c'},{key:'c'}],
  [{key:'c'},{key:'c'},{key:'c'}],
  [{key:'a'},{key:'a'},{key:'a'}],
  [{key:'b'},{key:'b'},{key:'b'}],
  [{key:'b'},{key:'b'},{key:'b'}],
  [{key:'c'},{key:'c'},{key:'c'}],
  [{key:'c'},{key:'c'},{key:'c'}],
  [{key:'a'},{key:'a'},{key:'a'}],
  [{key:'b'},{key:'b'},{key:'b'}]
];

const b = {};

a.forEach((element)=>{
    element.forEach((element2)=>{
        if(!(b[element2.key] instanceof Array)){
            b[element2.key] = [];
        }
        b[element2.key].push(element2);
    })
})

console.log(b);