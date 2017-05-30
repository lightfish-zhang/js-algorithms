class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
        this.length = null;
    }
    
    append(element){
        const node = new Node(element);
        const current;

        if(this.head === null){
            this.head = node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length ++;
    }


    removeAt(position){
        if(position > -1 && position < this.length){
            let current = this.head, previous, index = 0;
            if(position = 0){
                this.head = current.next;
            }else{
                while( index ++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length --;
            return current.element
        }else{
            return null
        }
    }


    insert(position, element){
        if(position >= 0 && position <= this.length){
            var node = new Node(element), current = this.head, previous, index;
            if(position === 0){
                node.next = current;
                head = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            this.length ++;
            return true;
        }else{
            return false;
        }
    }

    getHead(){
        return this.head;
    }

    isEmpty(){
        return this.length === 0;
    }

    indexOf(element){
        let current = head, index = -1;
        while(current){
            if(element === current.element){
                return index;
            }
            index ++;
            current = current.next;
        }
        return -1;
    }

    remove(element){
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

}