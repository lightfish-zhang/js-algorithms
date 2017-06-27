let fibonacciTime = 0;
const fibonacci = (num)=>{
    if(num === 1 || num === 2)
        return 1;
    fibonacciTime ++;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

/* equil， however, second is quicker */

let fibTime = 0;
const fib = (num) => {
    let n1 = 1, n2 = 1, n = 1;
    for(let i = 3; i <= num; i++){
        n = n1 + n2;
        n1 = n2;
        n2 = n;
        fibTime ++;
    }
    return n;
}

let re1 = fibonacci(10);
let re2 = fib(10);
console.log(`fibonacci(10) run ${fibonacciTime} times, result is ${re1}`)
console.log(`fib(10) run ${fibTime} times, result is ${re2}`)

/*
斐波那契数列，递归与非递归的对比
```
output:
fibonacci(10) run 54, result is 55
fib(10) run 8, result is 55
```

从这里可以知道，递归的优点在于实现简单，代码可读性好。缺点是有重复计算的问题，一些语言在某些平台上还有递归限制的次数。
在计算复杂的场景下使用递归，可以通过映射表缓存计算结果，避免重复计算。

javascript有尾调用优化，当函数最后一个操作是调用函数，会通过`跳转指令（jump）`而不是子程序调用
*/