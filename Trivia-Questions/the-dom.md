# What is the dom?

When we load a page into our browser. That page comes in as HTML and CSS. Our browser parses that data and displays our content. But after that page is loaded we need to have a way of changing that data without having to make calls to our server repeatedly.

The DOM or Document Object Model provides us with an object oriented representation of the web page and allows us to modify elements using Javascript. The DOM is built using a tree structure and represents data as nodes.

# Single Page Apps

Single page applications only have one backend route that renders HTML. To allow users to interact with the database, asynchronous Ajax requests send and retrieve information to the backend, and React updates the relevant portion of the page. This brings an improvement in performance because the page isn't entirely reloaded with every click. Rather, React attempts to update a minimal number of elements.

# Virtual DOM

As web pages grow in size, the DOM becomes more expensive to manage and traverse. The two main bottlenecks are re-rendering and layout shifting of the DOM.

The Virtual DOM essentially makes of a copy of the regular DOM. It uses functions called life cycle methods and a diffing algorithim to determine when and how to update specific components.

The three main techniques that React uses are: BFS, Reconcilliation and Batch Updates.

BFS, or breadth first search allows us to quickly traverse the Virtual DOM. Reconcilliation determines which portions of the Virtual DOM need to be updated. Batch updates put controls on when and how we manipulate the DOM. 

It speeds up performance in several ways. The diffing algorithim determines the least number of steps necessary to update the regular DOM. Batch updates only cause a render when all associated functions have finished running.
