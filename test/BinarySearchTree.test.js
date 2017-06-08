const assert = require('assert');


const BinarySearchTree = require('../src/BinarySearchTree/BinarySearchTree');


// in some env , Object's property will order by key, so use Array
const testArray = [];
for(let i = 0; i < 100 ; i++){
  testArray.push({
    key : Math.random(),
    data : Math.random(),
  })
}

// if use string as key, BinarySearchTree can't work


it("BinarySearchTree's insert(), search()", (done)=>{

  const tree = new BinarySearchTree();
  const testObj = {};

  for(let v of testArray){
      tree.insert(v.key, v.data)
      testObj[v.key] = v.data;
  }


  for(let k in testObj){
      assert.equal(tree.search(k), testObj[k])
  }

  tree.inOrderTraverse( (node)=>{ assert.equal(node.data, testObj[node.key])} )
  tree.preOrderTraverse( (node)=>{ assert.equal(node.data, testObj[node.key])} )
  tree.postOrderTraverse( (node)=>{ assert.equal(node.data, testObj[node.key])} )

  tree.insert(0.5, 123)
  assert.equal(tree.search(0.5), 123);
  tree.remove(0.5);
  assert.equal(tree.search(0.5), undefined);

  done();
})
