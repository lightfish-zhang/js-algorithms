class Dictionary{

    constructor(){
        this.items = {};
    }

    has(key){
        return this.items[key];
    }

    set(key, value){
        this.items[key] = value;
    }

    remove(key){
        if(this.has(key)){
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key){
        return this.has(key) ? this.items[key] : undefined;
    }

    values(key){
        let {items} = this;
        let values = [];
        for(let k in items){
            if(this.has(k))
                values.push(items[k]);
        }
        return values;
    }

    getItems(){
        return this.items;
    }

}

module.exports = Dictionary;