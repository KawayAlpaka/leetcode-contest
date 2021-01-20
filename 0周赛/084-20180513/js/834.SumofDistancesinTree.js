
var sumOfDistancesInTree = function (N, edges) {
    let result = [];
    var tree = new Tree(N);

    var startTime = new Date();

    tree.formEdges(edges);
    
    var afterFormEdgesTime = new Date();
    console.log("formEdges Time:"+ (afterFormEdgesTime -startTime)); 
    // console.log(tree.root);

    tree.calcLayer();
    tree.calcAllDistanceByLayer();

    // tree.calcAllDistance();

    var afterCalcDistanceTime = new Date();
    console.log("CalcDistanceTime Time:"+ (afterCalcDistanceTime -afterFormEdgesTime)); 
    // console.log(tree.allDistance); 

    for (let i = 0; i < N; i++) {
        var sum = 0;
        for(let j=0;j<N;j++){
            if(i!=j){
                let distance = tree.allDistance[i][j];
                if(i>j){
                    distance = tree.allDistance[j][i];
                }
                
                if(distance>=0){
                    sum += distance;
                }
            }
        }
        result.push(sum);
    }
    var endTime = new Date();
    console.log("sum Time:"+ (endTime - afterCalcDistanceTime)); 
    return result;
};

class Tree {
    constructor(N){
        // this.root = {};
        // this.allDistance = {};
        this.allDistance = [];
        for(let i=0;i<N;i++){
            this.allDistance.push([]);
        }
        this.elements = [];
        this.N=N;
    }
    formEdges(edges){
        let self = this;
        
        while(edges.length > 0){
            let edge = edges.shift();
            var element = self.findElement(edge[0]);
            if(element){
                let node = new Node(edge[1],element);
                element.children.push(node);
                this.elements[node.name] = node;
            }else if(!self.root){
                self.root = new Node(edge[0],null);
                self.root.children.push(new Node(edge[1],self.root));
            }else{

                var element = self.findElement(edge[1]);
                if(element){
                    let node = new Node(edge[0],element);
                    element.children.push(node);
                    this.elements[node.name] = node;
                }else{
                    edges.push(edge);
                }
            }
        }
        // edges.forEach(function(edge){
        //     var element = self.findElement(edge[0]);
        //     if(element){
        //         element.children.push(new Node(edge[1],element));
        //     }else{

        //         self.root = new Node(edge[0],null);
        //         self.root.children.push(new Node(edge[1],self.root));
        //     }
        // });
    }
    findElement(eleName){
        var element = null;
        if(this.elements[eleName]){
            return this.elements[eleName];
        };
        if(!this.root){
            return element;
        }
        this.bianli(this.root,function(e){
            if(e.name == eleName){
                element = e;
                return false;
            }
            return true;
        });
        return element;
    }
    bianli(element,cb){
        var self = this;
        if(!element){
            return;
        }
        if(cb){
            if(!cb(element)){
                return ;
            }
        }
        if(element.children){
            element.children.forEach((e)=>{
                self.bianli(e,cb);
            });
        }
    }
    getDistance(name1,name2){
        // 初始化距离
        var distance = 0;
        if(this.allDistance[name1][name2]){
            return this.allDistance[name1][name2];
        }
        if(this.allDistance[name2][name1]){
            return this.allDistance[name2][name1];
        }
        this.bianli(this.root,(e)=>{
            e.distance = -1;
        });
        //广度优先算法
        var queue = [];
        var start = this.findElement(name1);
        if(!start){
            return -1;
        }
        queue.push(start);

        // while(true){
        //     let node = queue.shift();
        // }

        // 循环方案2
        while(true){
            var len = queue.length;
            if(len == 0){
                break;
            }
            for(let i=0;i<len;i++){
                let node = queue[i];
                node.distance = distance;
                if(name1 > node.name){
                    this.allDistance[node.name][name1] = node.distance;
                }else{
                    this.allDistance[name1][node.name] = node.distance;
                }
                if(node.name == name2){
                    return node.distance;
                }
                if(node.parent && node.parent.distance<0){
                    queue.push(node.parent);
                }
                node.children.forEach((e)=>{
                    if(e.distance<0){
                        queue.push(e);
                    }
                });
                
            }
            queue.splice(0,len);
            distance++;
        }
        return -1;
    }
    calcAllDistance(){
        for (let i = 0; i < this.N-1; i++) {
            for(let j=i+1;j<this.N;j++){
                // this.allDistance[i+"-"+j] = this.getDistance(i,j);
                this.getDistance(i,j);
            }
        }
    }
    calcLayer(){
        if(!this.root){
            return;
        }
        this.root.layer = 0;
        this.bianli(this.root,(e)=>{
            if(e.parent){
                e.layer = e.parent.layer + 1;
            }
            return true;
        });
    }
    calcAllDistanceByLayer(){
        if(!this.root){
            return;
        }

        for (let i = 0; i < this.N-1; i++) {
            for(let j=i+1;j<this.N;j++){
                var ei = this.findElement(i);
                var ej = this.findElement(j);
                var sameParent = this.findSameParent(ei,ej);
                this.allDistance[i][j] = ei.layer + ej.layer - 2 * sameParent.layer;
            }
        }

        // this.bianli(this.root,(e1)=>{
        //     this.bianli(this.root,(e2)=>{
        //         var sameParent = this.findSameParent(e1,e2);
        //         if(e1.name > e2.name){
        //             this.allDistance[e2.name][e1.name] = e1.layer + e2.layer - 2 * sameParent.layer;
        //         }else{
        //             this.allDistance[e1.name][e2.name] = e1.layer + e2.layer - 2 * sameParent.layer;
        //         }
        //         return true;
        //     });
        //     return true;
        // });
    }
    findSameParent(e1,e2){
        var subLayer = e1.layer - e2.layer;
        var e1Parent = e1;
        var e2Parent = e2;
        if(subLayer>0){
            for(let i=0;i<subLayer;i++){
                e1Parent = e1Parent.parent;
            }
        }else if(subLayer<0){
            var _subLayer = (-1)*subLayer
            for(let i=0;i<_subLayer;i++){
                e2Parent = e2Parent.parent;
            }
        }
        while(true){
            if(e1Parent == e2Parent){
                return e1Parent;
            }
            e1Parent = e1Parent.parent;
            e2Parent = e2Parent.parent;
        }
    }
}

class Node {
    constructor(name,parent){
        this.name = name;
        this.parent = parent;
        this.children = [];
    }
}

setTimeout(() => {
    testCases.forEach(function(testCase){
        console.log("a case start:")
        let r = sumOfDistancesInTree(testCase.N,testCase.edges);
        console.log(`result:${r}，except:${testCase.except}`);
    });
}, 0);


// console.log(sumOfDistancesInTree(N,edges));