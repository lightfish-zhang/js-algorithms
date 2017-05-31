/*
哈希表
实现思路：
- string类型的key，将每个字母的ASCII码叠加得出int类型的数字，此数字作为私有变量table数组的下标
- 私有标量table的每个元素均为链表，哈希表在遇到多个key哈希数字一样的保存对象，保存在链表中
*/


const LinkedList = require('../LinkedList/LinkedList')
const ValuePair = require('./ValuePair')

class HashTable{

    constructor(){
        this.table = [];
    }

    /*
        本算法的散列函数，hash冲突比较多，作为测试用
    */
    loseloseHashCode(key){
        if(typeof key !== 'string'){
            return false;
        }

        let hash = 0;
        for(let i =0; i< key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % 37;
    }

    /*
        最被社区推荐的散列函数之一
    */
    djb2HashCode(key){
        const hash = 5381;
        for(let i = 0; i < key.length; i++){
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1013;
    }

    put(key, value){
        let position = this.loseloseHashCode(key);
        if(this.table[position] == undefined){
            this.table[position] = new LinkedList();
        }
        this.table[position].append(new ValuePair(key, value));
    }


    get(key){
        let linkedList = this.table[this.loseloseHashCode(key)];
        if(linkedList != undefined){
            let current = linkedList.getHead();
            while(current){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    remove(key){
        let position = this.loseloseHashCode(key);
        if(this.table[position]){
            let current = this.table[position].getHead();
            let index = 0;
            while(current){
                if(current.element.key === key){
                    // todo:: test bug
                    this.table[position].removeAt(index);
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
                index++;
            }
        }
        return false;
    }

}

module.exports = HashTable;