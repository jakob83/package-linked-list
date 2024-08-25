class Node {
  constructor(value = null, next = null) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  list = null;

  append(value) {
    if (!this.list) {
      this.list = new Node(value);
      return;
    }
    let curr = this.list;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(value);
    console.log(this.list);
  }
  prepend(value) {
    this.list = new Node(value, this.list);
    console.log(this.list);
  }
  size() {
    let counter = 0;
    let curr = this.list;
    while (curr) {
      curr = curr.next;
      counter++;
    }
    return counter;
  }
  tail() {
    let curr = this.list;
    while (curr.next) {
      curr = curr.next;
    }
    return curr;
  }
  head() {
    return this.list;
  }
  atIndex(index) {
    let curr = this.list;
    for (let i = 0; i < index; i++) {
      if (!curr.next) return null;
      curr = curr.next;
    }
    return curr;
  }
  pop() {
    let curr = this.list;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
    console.log(this.list);
  }
  contains(v) {
    let curr = this.list;
    while (curr) {
      if (curr.value == v) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
  find(v) {
    let curr = this.list;
    let counter = 0;
    while (curr) {
      if (curr.value == v) {
        return counter;
      }
      curr = curr.next;
      counter++;
    }
    return null;
  }
  toString() {
    let curr = this.list;
    let string = '';
    while (curr) {
      string += `( ${curr.value} ) => `;
      curr = curr.next;
    }
    return (string += 'null');
  }
}

let list1 = new LinkedList();

list1.prepend('first');
list1.append(1);
list1.append(2);
list1.append(3);
console.log(list1.size());
console.log(list1.tail());
console.log(list1.head());
console.log(list1.atIndex(2));
list1.pop();
console.log(list1.contains(2));
console.log(list1.find(2));
console.log(list1.toString());
