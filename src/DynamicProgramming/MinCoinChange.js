class MinCoinChange{
    constructor(coins){
        this.coins = coins;
        this.cache = {};
    }

    makeChange(amount){
        if(!amount)
            return [];
        
        // 备忘录
        if(this.cache[amount])
            return this.cache[amount];

        let min = [], newMin, newAmount;
        this.coins.forEach((coin)=>{
            newAmount = amount - coin;
            if(newAmount>0)
                newMin = this.makeChange(newAmount); // 递归
            if(
                newAmount >= 0 && // 边界，F(0)=[], F(k)=[k], k from [...coins]
                (newMin.length < min.length-1 || !min.length) && // 判断是否newMin是否是最优子结构
                (newMin.length || !newAmount)
            )min = [coin].concat(newMin); // 状态转移方程 ，且在循环中，保存最优子结构
            
        });
        return (this.cache[amount] = min)
    }

}