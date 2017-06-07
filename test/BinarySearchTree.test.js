const assert = require('assert');


const BinarySearchTree = require('../src/BinarySearchTree/BinarySearchTree');

const randomNumber = Math.ceil(Math.random() * 10);
const testObj = {
    'a' : randomNumber,
    'b' : 'asdfsdaglasgkwegoeibaowinv'.slice(randomNumber, randomNumber*10),
    'Tyrion' : 'Tyrion-value',
    'Aaron' : 'Aaron-value',
}

for(let i = 0; i < 100 ; i++){
  testObj[Math.ceil(Math.random() * 1000)] = Math.ceil(Math.random() * 1000);
}

it("BinarySearchTree's insert(), search()", (done)=>{

  const tree = new BinarySearchTree();

  for(let k in testObj){
      tree.insert(k, testObj[k])
  }

  for(let k in testObj){
      let data = tree.search(k)
      assert.equal(data, testObj[k])
  }

  done();
})
