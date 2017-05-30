const assert = require('assert');


const Dictionary = require('../src/HashTable/Dictionary');


it("Dictionary's set(), get(), values()", ()=>{
    const dict = new Dictionary();

    const randomNumber = Math.floor(Math.random() * 10);

    const testObj = {
        a : randomNumber,
        b : 'asdfsdaglasgkwegoeibaowinv'.slice(randomNumber, randomNumber*10)
    }


    let values = [];
    for(let k in testObj){
        dict.set(k, testObj[k])
        values.push(testObj[k])
    }

    for(let k in testObj){
        assert.equal(dict.get(k), testObj[k])
    }

    assert.deepEqual(dict.values(), values)

})
