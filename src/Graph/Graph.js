class Graph{
    constructor(){
        this.vertices = [];
        this.adjacentList = new Map();
        this.time = 0;
    }

    addVertex(v){
        const {vertices, adjacentList} = this;
        vertices.push(v);
        adjacentList.set(v, []);
    }

    addEdge(v, w){
        const {adjacentList} = this;
        // const add = (a, b)=>{
        //     const vertex = adjacentList.get(a);
        //     if(vertex.indexOf(b) < 0)
        //         vertex.push(b);
        // }
        // add(v, w);
        // add(w, w);
        adjacentList.get(v).push(w);
        adjacentList.get(w).push(v);
    }

    toString(){
        const {vertices, adjacentList} = this;
        let s = '';
        vertices.forEach(ele=>{
            s += ele + ' -> ';
            adjacentList.get(ele).forEach(ele2=>{
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
        const {vertices, adjacentList} = this;
        const color = this.initializeColor();
        const queue = [];
        queue.push(v);
        while(queue.length){
            const vertex = queue.shift();
            color.set(vertex, 'grey');
            adjacentList.get(vertex).forEach(ele=>{
                if(color.get(ele) === 'white'){
                    color.set(ele, 'grey');
                    queue.push(ele);
                }
            });
            color.set(vertex, 'black');
            if(callback)
                callback(vertex);
        }
    }

    breadthFirstSearch2(v){
        const {vertices, adjacentList} = this;
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
            const vertex = queue.shift();
            color.set(vertex, 'grey');
            adjacentList.get(vertex).forEach(ele=>{
                if(color.get(ele) === 'white'){
                    queue.push(ele);
                    color.set(ele, 'grey');
                    distances.set(ele, distances.get(vertex) + 1);
                    predecessors.set(ele, vertex);
                }
            });
            color.set(vertex, 'black');
        }
        return {
            distances,
            predecessors
        }
    }

    shortestPath(a, b){
        const {vertices, adjacentList} = this;
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

    depthFirstSearchVisit(vertex, color, callback){
        const {adjacentList} = this;
        color.set(vertex, 'grey');
        if(callback)
            callback(vertex);
        adjacentList.get(vertex).forEach(ele=>{
            if(color.get(ele) === 'white')
                this.depthFirstSearchVisit(ele, color, callback);
        })
        color.set(vertex, 'black');
    }

    depthFirstSearch2(){
        const {vertices} = this; //get Object reference
        const color = this.initializeColor();
        const discoverTime = new Map(), finishTime = new Map(), predecessors = new Map();
        this.time = 0; // it is Primitive values
        vertices.forEach(ele=>{
            discoverTime.set(ele, 0);
            finishTime.set(ele, 0);
            predecessors.set(ele, null);
        });
        vertices.forEach(ele=>{
            if(color.get(ele) === 'white'){
                this.depthFirstSearchVisit2(ele, color, discoverTime, finishTime, predecessors);
            }
        })
        return {
            discoverTime,
            finishTime,
            predecessors
        }
    }

    depthFirstSearchVisit2(vertex, color, discoverTime, finishTime, predecessors){
        const {adjacentList} = this;
        color.set(vertex, 'grey');
        discoverTime.set(vertex, ++this.time);
        adjacentList.get(vertex).forEach(ele=>{
            if(color.get(ele) === 'white'){
                predecessors.set(ele, vertex);
                this.depthFirstSearchVisit2(ele, color, discoverTime, finishTime, predecessors);
            }
        })
        color.set(vertex, 'black');
        finishTime.set(vertex, ++this.time);
    }

}

module.exports = Graph;