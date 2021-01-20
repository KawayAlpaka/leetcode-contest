/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    var r = [];
    // var targetNode = null;
    // console.log(target);
    var bianli = function(node,pnode,layer,target){
        if(node){
            node.pnode = pnode;
            node.layer = layer;
            // if(node.val == target){
            //     targetNode = node;
            // }
            bianli(node.left,node,layer+1,target);
            bianli(node.right,node,layer+1,target);
        }
    };
    bianli(root,null,1,target);
    bianli2(root,function(node){
        // console.log(node.val);
        // console.log(targetNode);
        var tongp = tongParent(target,node);
        if(tongp == target){
            var distant = node.layer - target.layer;
        }else{
            var distant = node.layer + target.layer - tongp.layer * 2;
        }
        console.log(node.val+":"+distant);
        if(distant == K){
            r.push(node.val);
        }
    });

    return r;
};

var bianli2 = function(node,fn){
    if(node){
        fn(node);
        bianli2(node.left,fn);
        bianli2(node.right,fn);
    }
};

var tongParent = function(node1,node2){
    if(node1.layer > node2.layer){
        let cha = node1.layer - node2.layer;
        for(let i=0;i<cha;i++){
            node1 = node1.pnode;
        }
    }else if(node2.layer > node1.layer){
        let cha = node2.layer - node1.layer;
        for(let i=0;i<cha;i++){
            node2 = node2.pnode;
        }
    }
    while(true){
        if(node1 == node2){
            return node1;
        }else{
            node1 = node1.pnode;
            node2 = node2.pnode;
        }
    }
};
// var testCases = [
//     {
//         input1:"()",
//         expect:1
//     },
//     {
//         input1:"(())",
//         expect:2
//     },
//     {
//         input1:"()()",
//         expect:2
//     },
//     {
//         input1:"(()(()))",
//         expect:6
//     },
// ];
// var i = 0;
// testCases.forEach(function(c){
//     i++;
//     var result = scoreOfParentheses(c.input1);
//     if(result == c.expect){
//         console.log(i+":pass");
//     }else{
//         console.log(i+" error:","  result= ",result,"  expect=",c.expect);
//     }
// });