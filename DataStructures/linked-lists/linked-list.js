function LinkedList() {
  const length = 0;
  const head = null;

  const Node = function(element) {
    this.element = element;
    this.next = null;
  }

  this.size = function() {
    return length;
  }

  this.isEmpty = function() {
    return length === 0;
  }

  this.head = function() {
    return head;
  }

  this.add = function(element) {
    const node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      const currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  }

  this.remove = function(element) {
    const currentNode = head;
    const previousNode;

    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next
    }

    length--;
  }

  this.indexOf = function(element) {
    const currentNode = head;
    const index = -1;

    while (currentNode) {
      index++;

      if (currentNode.element === element) {
        return index;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }

  this.elementAt = function(index) {
    const currentNode = head;
    const curIdx = -1;

    while (curIdx < index) {
      curIdx++;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  }

  this.addAt = function(index, element) {
    const node = new Node(element);

    const currentNode = head;
    const previousNode;
    const curIdx = -1;

    if (index === 0) {
      head = node;
    } else {
      while (curIdx < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    previousNode.next = node;
    node.next = currentNode;
    length++;
  }

  this.removeAt = function(index) {
    const currentNode = head;
    const previousNode;
    const curIdx = 0;

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (curIdx < index) {
        curIdx++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
    return currentNode.element;
  }
}
