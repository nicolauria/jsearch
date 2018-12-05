class binaryMinHeap {
  constructor() {
    this.store = [];
  }

  extract() {
    [this.store[0], this.store[this.store.length - 1]] =
      [this.store[this.store.length - 1], this.store[0]];
    let val = this.store.pop();
    this.heapifyDown(this.store, 0);
    return val;
  }

  childIndices(parentIdx) {
    let indices = [(parentIdx * 2) + 1, (parentIdx * 2) + 2];
    return indices.filter(el => el < this.store.length);
  }

  parentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  heapifyDown(array, parentIdx) {
    let childIndices = childIndices(parentIdx);
    return this.store if childIndices.length === 0;

    let smallestVal;
    if (childIndices.length === 1) {
      smallestVal = array[childIndices[0]];
    } else if (){

    }
  }
}
