const LinkedList = require('../LinkedList/LinkedList')
const ValuePair = require('./ValuePair')

class HashTable{

    constructor(){
        this.table = [];
    }

    loseloseHashCode(key){
        if(typeof key !== 'string'){
            return false;
        }

        let hash = 0;
        for(let i =0; i< key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % 31;
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
            let current = table[position].getHead();
            while(current){
                if(current.element.key === key){
                    this.table[position].remove(current.element);
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined;
                    }
                    return true;
                }
            }
        }
        return false;
    }

}

module.exports = HashTable;