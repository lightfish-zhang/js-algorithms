const assert = require('assert');

const HashTable = require('../src/HashTable/HashTable2');

it("HashTable's set(), get(), remove()", ()=>{

    const hashTable = new HashTable();

    const randomNumber = Math.ceil(Math.random() * 10);

    const testObj = {
        a : randomNumber,
        b : 'asdfsdaglasgkwegoeibaowinv'.slice(randomNumber, randomNumber*10),
        'Tyrion' : 'Tyrion-value',
        'Aaron' : 'Aaron-value',
    }


    let values = [];
    for(let k in testObj){
        hashTable.put(k, testObj[k])
        console.log('HashCode', k, ' ', hashTable.loseloseHashCode(k))
        values.push(testObj[k])
    }

    for(let k in testObj){
        let hashGet = hashTable.get(k)
        console.log(hashGet)
        assert.equal(hashGet, testObj[k])
    }


    let AaronV = hashTable.get('Aaron');
    assert.equal(AaronV, 'Aaron-value');
    hashTable.remove('Aaron');
    AaronV = hashTable.get('Aaron');
    assert.equal(AaronV, undefined);


})

it("HashTable's performance test, compare with Map", (done)=>{
    const testObj = {};
    let startMillisecond,internalMillisecond;

    for(let i = 0; i < 10000; i++){
      testObj[Math.ceil(Math.random() * 100000)] = Math.ceil(Math.random() * 10000);
    }
    console.log('testObj length: ', Object.keys(testObj).length);

    const hashTable = new HashTable();
    startMillisecond = (new Date()).valueOf();

    for(let k in testObj){
        hashTable.put(k, testObj[k])
    }
    internalMillisecond = (new Date()).valueOf() - startMillisecond;
    console.log(`hashTable put(), spend ${internalMillisecond} ms`);

    startMillisecond = (new Date()).valueOf();
    for(let k in testObj){
        let v = hashTable.get(k)
    }
    internalMillisecond = (new Date()).valueOf() - startMillisecond;
    console.log(`hashTable get(), spend ${internalMillisecond} ms`);


    const map = new Map();
    startMillisecond = (new Date()).valueOf();
    for(let k in testObj){
        map.set(k, testObj[k])
    }
    internalMillisecond = (new Date()).valueOf() - startMillisecond;
    console.log(`map put(), spend ${internalMillisecond} ms`);

    startMillisecond = (new Date()).valueOf();
    for(let k in testObj){
        let v = map.get(k)
    }
    internalMillisecond = (new Date()).valueOf() - startMillisecond;
    console.log(`map get(), spend ${internalMillisecond} ms`);

    done();
})
