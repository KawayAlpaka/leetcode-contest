function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function bianli(treeNode,mode="pre",cb){
  if(!treeNode){
    return;
  }
  if(mode=="pre"){
    cb && cb(treeNode);
  }
  bianli(treeNode.left,mode,cb);
  if(mode=="center"){
    cb && cb(treeNode);
  }
  bianli(treeNode.right,mode,cb);
  if(mode=="rear"){
    cb && cb(treeNode);
  }
}

function getPre (treeNode){
  var pre = [];
  bianli(treeNode,"pre",(node)=>{
    pre.push(node.val);
  });
  return pre;
}

function getRear (treeNode){
  var rear = [];
  bianli(treeNode,"rear",(node)=>{
    rear.push(node.val);
  });
  return rear;
}

function getCenter (treeNode){
  var center = [];
  bianli(treeNode,"center",(node)=>{
    center.push(node.val);
  });
  return center;
}


function rebuild(pre, center, rear){
  if(!center){
    throw new Error("不能缺少中序遍历");
  }
  if(!pre && !rear){
    throw new Error("先序和后序至少有一个");
  }
  if(pre){
    // console.log("存在先序遍历参数，用先序+中序重建二叉树");
    let rootVal = pre[0];
    if(!rootVal && rootVal != 0) return null;
    let root = new TreeNode(rootVal);
    let index = center.indexOf(rootVal);
    root.left = rebuild(pre.slice(1,1+index),center.slice(0,index));
    root.right = rebuild(pre.slice(1+index,pre.length),center.slice(index+1,center.length));
    return root;
  }else if(rear){
    // console.log("存在后序遍历参数，用后序+中序重建二叉树");
    let rootVal = rear[rear.length-1];
    if(!rootVal && rootVal != 0) return null;
    let root = new TreeNode(rootVal);
    let index = center.indexOf(rootVal);
    root.left = rebuild(null,center.slice(0,index),rear.slice(0,index));
    root.right = rebuild(null,center.slice(index+1,center.length),rear.slice(index,rear.length-1));
    return root;
  }
}



let testCases = [
  { 
    pre:"abdgcefh".split(""),
    center:"dgbaechf".split(""),
    expect:"gdbehfca".split("")
  },
  {
    rear:"dabec".split(""),
    center:"debac".split(""),
    expect:"cedba".split("")
  }
]

function runTest(testCases){
  for(let i=0;i<testCases.length;i++){
    let testCase = testCases[i];
    let getResult = getRear;
    if(testCase.rear){
      getResult = getPre;
    }
    let root = rebuild(testCase.pre,testCase.center,testCase.rear);
    let result = getResult(root).join("");

    if(result == testCase.expect.join("")){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail`);
      console.warn(`expect:${testCase.expect.join('')}`,`result:${result}`);
    }
  }
}

runTest(testCases);
