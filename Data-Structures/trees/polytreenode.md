# Trees

Trees store data in a hierarchy of layers. An element, or node at each layer can have links to lower level nodes. One simple example is a file system.

The top level node is called the root. Each node can hold a value. In a file system the root usually holds ‘/’. The children of a node are the nodes one level deeper. The lowest level nodes (the ones with no children) are called leaves.

An array and a tree are two kinds of data structures. A data structure is a way of storing and organizing data in a computer so that it can be used efficiently.

## Depth First Search (DFS)

One common way to traverse a tree is Depth First Search. Each time we try to visit the left child if it exists and hasn’t been visited yet. If it has been visited we try to visit the right child, if it exists and hasn’t been visited yet. If all the children have been visited we move up on level and repeat.
