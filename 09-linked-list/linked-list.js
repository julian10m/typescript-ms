var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    };
    LinkedList.prototype.insertAt = function (value, pos) {
        if (pos < 1 || pos > this.length + 1) {
            return;
        }
        var node = new ListNode(value);
        if (pos == 1) {
            node.next = this.root;
            this.root = node;
        }
        else if (pos == this.length + 1) {
            this.tail.next = node;
        }
        else {
            var current = this.root;
            var currentPos = 2;
            while (currentPos < pos) {
                current = current.next;
                currentPos++;
            }
            node.next = current.next;
            current.next = node;
        }
        this.length++;
        return this;
    };
    LinkedList.prototype.getLength = function () {
        return this.length;
    };
    LinkedList.prototype.print = function () {
        var current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(100);
linkedList.add(1000);
console.log("List length: ".concat(linkedList.getLength()));
console.log('****************');
linkedList.print();
console.log('****************');
linkedList.insertAt(0, 1);
linkedList.insertAt(-1, 5);
linkedList.insertAt(0, 3);
console.log('****************');
linkedList.print();
console.log('****************');
linkedList.insertAt(0, 6);
console.log('****************');
linkedList.print();
console.log('****************');
