const assert = require('assert');


const LinkedList = require('../src/LinkedList/LinkedList');


it("LinkedList's append(), indexOf()", ()=>{
    const list = new LinkedList();

    const testArray = [];
    for(let i = 0; i < 10; i++){
      testArray.push(Math.random());
    }


    let values = [];
    for(let v of testArray){
        list.append(v)
    }

    for(let k in testArray){
        assert.equal(list.indexOf(testArray[k]), k)
    }

    list.append(123456789);
    list.append(987654321);
    assert.equal(list.indexOf(123456789), 10)
    assert.equal(list.indexOf(987654321), 11)

    list.remove(123456789);
    assert.equal(list.indexOf(123456789), -1)
    assert.equal(list.indexOf(987654321), 10)

})
