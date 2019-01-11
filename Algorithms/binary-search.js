function binarySearchRec(arr, target) {
  if (arr.empty) return null;
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) return mid;

  if (arr[mid] > target) {
    return binarySearchRec(arr.slice(0, mid), target);
  } else {
    const subResult = binarySearchRec(arr.slice(mid + 1, arr.length), target);
    return subResult === null ? null : subResult + mid + 1;
  }
}

function binarySearchIter(arr, target) {
  let arrCopy = JSON.parse(JSON.stringify(arr));
  let removedIndices = 0;

  while (arrCopy.length > 0) {
    let mid = Math.floor(arrCopy.length / 2);
    if (arrCopy[mid] === target) return (mid + removedIndices);

    if (arrCopy[mid] > target) {
      arrCopy = arrCopy.slice(0, mid);
    } else {
      arrCopy = arrCopy.slice(mid + 1, arrCopy.length - 1);
      removedIndices += (mid + 1);
    }
  }
}

console.log(
  binarySearchRec([1,2,3,4,5,6,7], 6)
)
