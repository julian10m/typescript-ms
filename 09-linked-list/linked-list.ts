class ListNode<T> {
    public next?: ListNode<T>
    constructor(public value: T) {}
}

class LinkedList<T>{
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length: number = 0

    add(value: T) {
        const node = new ListNode(value)

        if(!this.root || !this.tail) {
            this.root = node
            this.tail = node
        } else {
            this.tail.next = node 
            this.tail = node
        }

        this.length++
        return this 
    }

    insertAt(value: T, pos: number) {
        if(pos < 1 || pos > this.length + 1) {
            return;
        }

        const node = new ListNode(value);

        if(pos == 1) {
            node.next = this.root
            this.root = node
            if(!this.length) {
                this.tail = node
            }
        } else if(pos == this.length + 1) {
            this.tail!.next = node
            this.tail = node
        } else {
            let current = this.root!
            let currentPos = 2 

            while(currentPos < pos) {
                current = current.next!
                currentPos++ 
            }

            node.next = current.next!
            current.next = node
        }

        this.length++
        return this
    }

    getLength(){
        return this.length
    }

    print() {
        let current = this.root
        
        while(current) {
            console.log(current.value)
            current = current.next
        }
    }

}


const linkedList = new LinkedList<number>()

linkedList.add(10)
linkedList.add(100)
linkedList.add(1000)

console.log(`List length: ${linkedList.getLength()}`)
console.log('****************')
linkedList.print()
console.log('****************')

linkedList.insertAt(0, 1)
linkedList.insertAt(-1, 5)
linkedList.insertAt(0, 3)
console.log('****************')
linkedList.print()
console.log('****************')
linkedList.insertAt(0, 6)

console.log('****************')
linkedList.print()
console.log('****************')