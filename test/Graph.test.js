const assert = require('assert');

const Graph = require('../src/Graph/Graph');

it("Graph's addVertex(), addEdge(), toString(), breadthFirstSearch(), shortestPath()", (done)=>{

    const graph = new Graph();
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addVertex('c');
    graph.addVertex('d');
    graph.addVertex('e');
    graph.addVertex('f');

    graph.addEdge('a', 'b');
    graph.addEdge('a', 'd');
    graph.addEdge('a', 'e');
    graph.addEdge('b', 'f');
    graph.addEdge('c', 'e');

    console.log(graph.toString());

    graph.breadthFirstSearch('b', (v)=>{ console.log(`Visited vertex: ${v}`) })

    console.log(graph.breadthFirstSearch2('b'));
    console.log(graph.shortestPath('b', 'e'));

    done();
})