class Node{
    constructor(val){
        this.val  = val;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.length = 0
        this.head   = null
        this.tail   = null 
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail      = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var curr    = this.head;
        var newTail = curr;

        while(curr.next){
            newTail  = curr
            curr     = curr.next;
        }

        this.tail      = newTail;
        this.tail.next = null 
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        if(this.length === 1){
            this.tail = this.head;
        }
        return curr;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--
        return temp;
    }

    unshift(val){
        let newNode  = new Node(val);
        newNode.next = this.head;
        this.head    = newNode;
        this.length++;
        return this.head; 
    }

    set(id,val){
        let temp = this.head;
        let counter = 0;
        while(counter!==id){
            temp = temp.next;
            
        }
    }

    insert(pos,val){
        let newNode   = new Node(val)
        let tempHead  = this.head;
        let prev      = this.head;
        let counter   = 0
        while(counter !== pos){
            prev     = tempHead;
            tempHead = tempHead.next;
            counter++
        }

        if(prev){
            prev.next       = newNode;
            newNode.next    = tempHead;
        }
        this.length++;
        return this.head;
    }

    remove(id){
        if(id < 0 || id >= this.length) return undefined;
        if(id === 0) return this.unshift()
        if(id === this.length - 1) return this.pop()

        let count = 0;
        let prevNode = this.head;
        while(count !== id-1){
            prevNode = prevNode.next;
            count++
        }

        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length --;
        return removed;
    }

    printValues(){
        let tempHead = this.head;
        while(tempHead){
            console.log(tempHead.val)
            tempHead = tempHead.next;
        }
    }
}

var list = new linkedList();
list.push(1)
list.push(2)
list.push(3)
list.unshift(4)
list.insert(2,5)
list.remove(2)
list.printValues()
console.log(list);
