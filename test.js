
const depthFirstSearch = target => {
  return this if this.value === target

  const left = depthFirstSearch(this.left);
  const right = depthFirstSearch(this.right);

  return left || right || null;
}
