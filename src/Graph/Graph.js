class Graph{
    constructor(){
        this.vertices = [];
        this.adjList = new Map();
    }

    addVertex(v){
        const {vertices, adjList} = this;
        vertices.push(v);
        adjList.set(v, []);
    }

    addEdge(v, w){
        const {adjList} = this;
        // const add = (a, b)=>{
        //     const node = adjList.get(a);
        //     if(node.indexOf(b) < 0)
        //         node.push(b);
        // }
        // add(v, w);
        // add(w, w);
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    toString(){
        const {vertices, adjList} = this;
        let s = '';
        vertices.forEach(ele=>{
            s += ele + ' -> ';
            adjList.get(ele).forEach(ele2=>{
                s += ele2 + ' ';
            })
            s += '\n';
        })
        return s;
    }

    initializeColor(){
        const {vertices} = this;
        const color = new Map();
        vertices.forEach(ele => color.set(ele, 'white'));
        return color;
    }

    breadthFirstSearch(v, callback){
        const {vertices, adjList} = this;
        const color = this.initializeColor();
        const queue = [];
        queue.push(v);
        while(queue.length){
            const node = queue.shift();
            color.set(node, 'grey');
            adjList.get(node).forEach(ele=>{
                if(color.get(ele) === 'white'){
                    color.set(ele, 'grey');
                    queue.push(ele);
                }
            });
            color.set(node, 'black');
            if(callback)
                callback(node);
        }
    }

    breadthFirstSearch2(v){
        const {vertices, adjList} = this;
        const color = this.initializeColor();
        const queue = [];
        const distances = new Map();
        const predecessors = new Map();
        queue.push(v);
        vertices.forEach(ele=>{
            distances.set(ele, 0);
            predecessors.set(ele, null);
        })

        while(queue.length){
            const node = queue.shift();
            color.set(node, 'grey');
            adjList.get(node).forEach(ele=>{
                if(color.get(ele) === 'white'){
                    queue.push(ele);
                    color.set(ele, 'grey');
                    distances.set(ele, distances.get(node) + 1);
                    predecessors.set(ele, node);
                }
            });
            color.set(node, 'black');
        }
        return {
            distances,
            predecessors
        }
    }

    shortestPath(a, b){
        const {vertices, adjList} = this;
        const result = this.breadthFirstSearch2(a);
        let path = [];
        for(let v = b; v!==a; v = result.predecessors.get(v))
            path.unshift(v);
        path.unshift(a);
        return path;
    }

    depthFirstSearch(callback){
        const {vertices} = this;
        const color = this.initializeColor();
        vertices.forEach(ele=>{
            if(color.get(ele) === 'white')
                this.depthFirstSearchVisit(ele, color, callback)
        })
    }

    depthFirstSearchVisit(node, color, callback){
        const {adjList} = this;
        color.set(node, 'grey');
        if(callback)
            callback(node);
        adjList.get(node).forEach(ele=>{
            if(color.get(ele) === 'white')
                this.depthFirstSearchVisit(ele, color, callback);
        })
        color.set(node, 'black');
    }



}

module.exports = Graph;