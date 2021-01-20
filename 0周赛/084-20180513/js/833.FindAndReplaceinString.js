console.log("start");


// "vmokgggqzp"
// [3,5,1]
// ["kg","ggq","mo"]
// ["s","so","bfr"]


// var c = {
//     S:"abcd",
//     indexes:[0, 2],
//     sources:["a", "cd"],
//     targets:["eee", "ffff"]
// };

// var c = {
//     S:"abcd",
//     indexes:[0, 2],
//     sources:["ab", "cd"],
//     targets:["eee", "ffff"]
// };


// var c = {
//     S:"abcd",
//     indexes:[0, 2],
//     sources:["ab", "ec"],
//     targets:["eee", "ffff"]
// };

var c = {
    S:"vmokgggqzp",
    indexes:[3,5,1],
    sources:["kg","ggq","mo"],
    targets:["s","so","bfr"]
};
//"vmossobfr"
//"vbfrssozp"
// vbfrssozp


// "wreorttvosuidhrxvmvo"
// [14,12,10,5,0,18]
// ["rxv","dh","ui","ttv","wreor","vo"]
// ["frs","c","ql","qpir","gwbeve","n"]

var c = {
    S:"wreorttvosuidhrxvmvo",
    indexes:[14,12,10,5,0,18],
    sources:["rxv","dh","ui","ttv","wreor","vo"],
    targets:["frs","c","ql","qpir","gwbeve","n"]
};
//gwbeveqpirosqlcfrsmn
//   gwbeveqpirosqlcfrsmn
//   gwbeveqpirosqlcfrsmn
//gwbeveqpirosqlcfrsmvo

var findReplaceString = function(S, indexes, sources, targets) {
    var len = sources.length;
    for(let j =0;j<len-1;j++){
        for(let i =0;i<len-1;i++){
            if(indexes[i]>indexes[i+1]){
                let _t = indexes[i];
                indexes[i] = indexes[i+1];
                indexes[i+1] = _t;
    
                _t = sources[i];
                sources[i] = sources[i+1];
                sources[i+1] = _t;
    
                _t = targets[i];
                targets[i] = targets[i+1];
                targets[i+1] = _t;
            }
        }
    }

    let neetReplace = [];
    for(let i =0;i<len;i++){
        let ii = indexes[i];
        var ss = sources[i];
        
        let start = 0;
        while(true){
            var iii = S.indexOf(sources[i],start);
            if(iii === indexes[i]){
                neetReplace.push({
                    index:indexes[i],
                    source: sources[i],
                    target: targets[i]
                });
                break;
            }else if(iii < 0){
                break;
            }else{
                start = iii+1;
            };
        }


    }
    var arrS = S.split("");
    var pianyi = 0;
    neetReplace.forEach(function(replace){
        arrS.splice(replace.index + pianyi,replace.source.length,replace.target);
        pianyi = pianyi - replace.source.length + 1;
    });
    console.log(neetReplace);
    return arrS.join("");
};

console.log(findReplaceString(c.S,c.indexes,c.sources,c.targets));

