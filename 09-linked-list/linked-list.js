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
        if (!this.root) {
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
            return this;
        }
        var node = new ListNode(value);
        if (pos === 1) {
            node.next = this.root;
            this.root = node;
            if (!this.length)
                this.tail = node;
        }
        else if (pos === this.length + 1) {
            this.tail.next = node;
            this.tail = node;
        }
        else {
            var previous = this.root;
            for (var i = 2; i < pos; i++) {
                previous = previous.next;
            }
            node.next = previous.next;
            previous.next = node;
        }
        this.length++;
        return this;
    };
    LinkedList.prototype.removeAt = function (pos) {
        if (pos < 1 || pos > this.length) {
            return this;
        }
        if (pos === 1) {
            if (this.length === 1) {
                this.root = undefined;
                this.tail = undefined;
            }
            else {
                this.root = this.root.next;
            }
        }
        else {
            var previous = this.root;
            for (var i = 2; i < pos; i++) {
                previous = previous.next;
            }
            if (pos === this.length) {
                this.tail = previous;
            }
            previous.next = previous.next.next;
        }
        this.length--;
        return this;
    };
    LinkedList.prototype.inverse = function () {
        if (!this.length || this.length === 1) {
            return this;
        }
        var prev = this.root;
        var current = prev.next;
        var future = current.next;
        prev.next = undefined;
        this.tail = prev;
        while (future) {
            current.next = prev;
            prev = current;
            current = future;
            future = future.next;
        }
        current.next = prev;
        this.root = current;
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
linkedList.insertAt(0, 3);
linkedList.insertAt(-1, 6);
console.log('****************');
linkedList.print();
console.log('****************');
// linkedList.insertAt(0, 6)
// console.log('****************')
// linkedList.print()
// console.log('****************')
linkedList.removeAt(6);
linkedList.removeAt(3);
linkedList.removeAt(1);
console.log("List length: ".concat(linkedList.getLength()));
console.log('****************');
linkedList.print();
console.log('****************');
linkedList.inverse();
console.log('****************');
linkedList.print();
console.log('****************');
console.log("List length: ".concat(linkedList.getLength()));
