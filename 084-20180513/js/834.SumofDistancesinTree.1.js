
//第一名的算法

var sumOfDistancesInTree = function (N, edges) {
    var n = N;
    let result = [];
    var from = [];
    var to = [];
    for(let i = 0;i < n-1;i++){
        from[i] = edges[i][0];
        to[i] = edges[i][1];
    }
    // console.log(from);
    // console.log(to);
    var g = packU(n, from, to);
    // console.log(g);
    var pars = parents3(g, 0);
    var par = pars[0], ord = pars[1], dep = pars[2];
    // console.log(pars);
    var dp = new Array(n);
    dp.fill(0);
    var des = new Array(n);
    des.fill(1);
    for(let i = n-1;i >= 1;i--){
        des[par[ord[i]]] += des[ord[i]];
    }
    // console.log(des);
    for(let i = n-1;i >= 0;i--){
        let cur = ord[i];

        for(let e of g[cur]){
            if(par[cur] == e)continue;
            dp[cur] += dp[e] + des[e];
        }
    }
    // console.log(dp);
    for(let i = 1;i < n;i++){
        let cur = ord[i];
        let p = par[cur];
        dp[cur] += dp[p] - dp[cur] - des[cur] + (n - des[cur]);
    }
    return dp;
};


var parents3 = function(g,root) {
    let n = g.length;
    let par = new Array(n);
    par.fill(-1);
    // Arrays.fill(par, -1);

    let depth = [];
    depth[0] = 0;

    let q = [];
    q[0] = root;
    for (let p = 0, r = 1; p < r; p++) {
        let cur = q[p];
        for (let nex of g[cur]) {
            if (par[cur] != nex) {
                q[r++] = nex;
                par[nex] = cur;
                depth[nex] = depth[cur] + 1;
            }
        }
    }
    return  [par, q, depth] ;
}



var packU = function(n, from,to) {
    let g = [];
    let p = new Array(n);
    p.fill(0);
    for (let f of from){
        p[f]++;
    }
        
    for (let t of to)
        p[t]++;
    for (let i = 0; i < n; i++)
        g[i] = [];
    for (let i = 0; i < from.length; i++) {
        g[from[i]][--p[from[i]]] = to[i];
        g[to[i]][--p[to[i]]] = from[i];
    }
    console.log("g：",g);
    return g;
}

setTimeout(() => {
    testCases.forEach(function(testCase){
        console.log("a case start:")
        let r = sumOfDistancesInTree(testCase.N,testCase.edges);
        console.log(`result:${r}，except:${testCase.except}`);
    });
}, 0);
