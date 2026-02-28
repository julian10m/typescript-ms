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

        if(!this.root) {
            this.root = node
            this.tail = node
        } else {
            this.tail!.next = node 
            this.tail = node
        }

        this.length++
        return this 
    }

    insertAt(value: T, pos: number) {
        if(pos < 1 || pos > this.length + 1) {
            return this;
        }

        const node = new ListNode(value);

        if(pos === 1) {
            node.next = this.root
            this.root = node
            if(!this.length) this.tail = node; 
        } else if(pos === this.length + 1) {
            this.tail!.next = node
            this.tail = node
        } else {
            let previous = this.root!

            for(let i = 2; i < pos; i++) {
                previous = previous.next!
            }

            node.next = previous.next
            previous.next = node
        }

        this.length++
        return this
    }

    removeAt(pos: number) {
      if(pos < 1 || pos > this.length) {
            return this;
        }

      if(pos === 1) {
        if(this.length === 1) {
            this.root = undefined
            this.tail = undefined 
        } else {
            this.root = this.root!.next 
        } 
      } else {
        let previous = this.root!
        
        for(let i = 2; i < pos; i++) {
            previous = previous.next! 
        }

        if(pos === this.length) {
            this.tail = previous
        }
        previous.next = previous.next!.next
      }
      this.length-- 
      return this;   
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
linkedList.insertAt(0, 3)
linkedList.insertAt(-1, 6)

console.log('****************')
linkedList.print()
console.log('****************')
// linkedList.insertAt(0, 6)

// console.log('****************')
// linkedList.print()
// console.log('****************')

linkedList.removeAt(6)
linkedList.removeAt(3)
linkedList.removeAt(1)

console.log(`List length: ${linkedList.getLength()}`)
console.log('****************')
linkedList.print()
console.log('****************')