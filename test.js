var findMinHeightTrees = function(n, edges) {
    if (!n || n === 0 || n - 1 !== edges.length) return [];

    let hsh = {};
    edges.forEach(edge => {
        hsh[edge[0]] ? hsh[edge[0]].push(hsh[edge[1]]) : hsh[edge[0]] = [edge[1]]
        hsh[edge[1]] ? hsh[edge[1]].push(hsh[edge[0]]) : hsh[edge[1]] = [edge[0]]
    });

    let leaves = [];
    for (var key in hsh) {
        if (hsh[key].length === 1) {
            leaves.push(hsh[key][0])
        }
    }

    while (leaves.length > 2) {
        let leaf = leaves.shift();
        // if node is a leaf then it only has one other node it's pointing to
        let nextNode = hsh[leaf];

        let index = nextNode.indexOf(leaf);
        nextNode.splice(index, 1);

        if (nextNode.length === 1) {
            leaves.push(nextNode[0]);
        }
    }

    return leaves;
};

console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]]));
// console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
