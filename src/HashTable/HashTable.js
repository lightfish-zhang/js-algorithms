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
        this.table[position] = value;
    }


    get(key){
        return this.table[this.loseloseHashCode(key)];
    }

    remove(key){
        this.table[this.loseloseHashCode(key)] = undefined;
    }

}

module.exports = HashTable;