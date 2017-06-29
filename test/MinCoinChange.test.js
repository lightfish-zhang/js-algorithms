const assert = require('assert');

const MinCoinChange = require('../src/DynamicProgramming/MinCoinChange');

it("MinCoinChange's makeChange()", (done)=>{
    const minCoinChange = new MinCoinChange([1,2,5,10,20,50,100]);

    assert.deepEqual(minCoinChange.makeChange(1), [1]);
    assert.deepEqual(minCoinChange.makeChange(50), [50]);
    assert.deepEqual(minCoinChange.makeChange(178), [ 1, 2, 5, 20, 50, 100 ]);
    assert.deepEqual(minCoinChange.makeChange(97), [ 2, 5, 20, 20, 50]);

    done();
})