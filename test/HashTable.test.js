const assert = require('assert');

const HashTable = require('../src/HashTable/HashTable2');

it("HashTable's set(), get()", ()=>{

    const hashTable = new HashTable();

    const randomNumber = Math.floor(Math.random() * 10);

    const testObj = {
        a : randomNumber,
        b : 'asdfsdaglasgkwegoeibaowinv'.slice(randomNumber, randomNumber*10),
        'Tyrion' : 'Tyrion-value',
        'Aaron' : 'Aaron-value',
    }


    let values = [];
    for(let k in testObj){
        hashTable.put(k, testObj[k])
        values.push(testObj[k])
    }

    for(let k in testObj){
        let hashGet = hashTable.get(k)
        console.log(hashGet)
        assert.equal(hashGet, testObj[k])
    }

    // assert.deepEqual(dict.values(), values)

})