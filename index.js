class Node {
  constructor(value = null, next = null, key = 'value') {
    this.next = next;
    this[key] = value;
  }
}

class LinkedList {
  list = null;

  append(value, key) {
    if (!this.list) {
      this.list = new Node(value, null, key);
      return;
    }
    let curr = this.list;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(value, null, key);
    console.log(this.list);
  }
  prepend(value, key) {
    this.list = new Node(value, this.list, key);
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

module.exports = LinkedList;
