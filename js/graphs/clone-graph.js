// https://leetcode.com/problems/clone-graph/

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, seen = new Map()) {
    if (!node) return null;

    if (seen.has(node)) return seen.get(node);

    const clone = new Node(node.val);
    seen.set(node, clone);

    for (const neighbor of node.neighbors) {
        const cloneNeighbor = cloneGraph(neighbor, seen);

        clone.neighbors.push(cloneNeighbor);
    }

    return clone;
};

/**
 * --- Notes ---
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * 
 * the function takes a node as input and returns the clone of the input graph
 * utilises recursive DFS approach to traverse the graph and clone each node and its neighbors
 * a `seen` map is used to keep track of already cloned nodes
 * returns the cloned version of the input node
 */