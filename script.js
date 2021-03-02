class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(value) {
        const newNode = new Node(value);
        newNode.next = this.head;

        if (this.head) {
            this.head.previous = newNode;
        } else { 
            this.tail = newNode;
        }

        this.head = newNode;
        this.length++;
        return newNode;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.tail = this.tail;

        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }

        this.tail = newNode;
        this.length++;
        return newNode;
    }
    shift() {
        if (!this.head) return null;

        let value = this.head.value;

        this.head = this.head.next;

        if (this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }

        this.length--;
        return value;
    }

    pop() {
        if (!this.tail) return null;

        let value = this.tail.value;

        this.tail = this.tail.previous;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        this.length--;    
        return value;
    }
    find(value) {  
        if (!this.head) {  // Если нет head - список пуст.
            return null;
        }

        let currentNode = this.head;
        while (currentNode) {// Перебираем все узлы в поиске значения.
            if (currentNode.value === value) {// Если указано значение, пробуем сравнить его по значению.
                return currentNode;
            }

            currentNode = currentNode.next;// Перематываем на один узел вперед.
        }
        return null;
    }

    addToArray() {
        const result = [];

        let current = this.head;
        while(current){
            result.push(current.value);
            current = current.next;
        }

        return result;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                deletedNode = currentNode;

                if (deletedNode === this.head) {
                    this.head = deletedNode.next;

                    if (this.head) {
                        this.head.previous = null;
                    }

                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    this.tail = deletedNode.previous;           
                    this.tail.next = null;
                } else {
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }   
            }
            currentNode = currentNode.next;
        }
        return deletedNode;
    }
}

function getMin(numArray) {
    return Math.min.apply(null, numArray);
}

let list = new DoublyLinkedList();

list.unshift(1);
list.unshift(5);
list.unshift(78);
list.unshift(71);
list.push(77);
list.push(6);
list.push(4);
list.push(47);
list.push(153);
list.push(2);

console.log(list.addToArray());

let x = getMin(list.addToArray())
console.log(`Мінімальне число - ${x}`);


list.delete(x);
list.unshift(x);
console.log(list.addToArray());
console.log(list.find(1));
console.time('10elements');
console.timeEnd('10elements');
