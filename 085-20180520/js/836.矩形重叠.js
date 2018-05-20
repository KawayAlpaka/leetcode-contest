/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// var isRectangleOverlap = function(rec1, rec2) {
//     var r1 = {};
//     r1.x1 = rec1[0];
//     r1.y1 = rec1[1];
//     r1.x2 = rec1[2];
//     r1.y2 = rec1[3];
//     var r2 = {};
//     r2.x1 = rec2[0];
//     r2.y1 = rec2[1];
//     r2.x2 = rec2[2];
//     r2.y2 = rec2[3];
//     // if(r1.x2 > r2.x1 && r1.y2 > r2.y1){

//     // }
//     //面积为0的情况
//     if(r1.x1 == r1.y1 &&
//         r1.x2 == r1.y2 &&
//         r1.x1 == r1.x2 &&
//         r2.x1 == r2.y1 &&
//         r2.x2 == r2.y2 &&
//         r2.x1 == r2.x2 
//     ){
//         return false;
//     }

//     //r1 r2 完全重合
//     if(r1.x1 == r2.x1 &&
//         r1.y1 == r2.y1 &&
//         r1.x2 == r2.x2 &&
//         r1.y2 == r2.y2 ){
//         return true;
//     }
//     //r2左下角在r1中
//     if( (r2.x1 > r1.x1 && r2.y1 > r1.y1) && (r2.x1 < r1.x2 && r2.y1 < r1.y2) ){
//         return true;
//     }
//     //r2右下角在r1中
//     if( (r2.x2 > r1.x2 && r2.y1 > r1.y1) && (r2.x2 < r1.x2 && r2.y2 < r1.y2) ){
//         return true;
//     }
//     //r1左下角在r2中
//     if( (r1.x1 > r2.x1 && r1.y1 > r2.y1) && (r1.x1 < r2.x2 && r1.y1 < r2.y2) ){
//         return true;
//     }
//     //r1右下角在r2中
//     if( (r1.x2 > r2.x2 && r1.y1 > r2.y1) && (r1.x2 < r2.x2 && r1.y2 < r2.y2) ){
//         return true;
//     }

//     return false;
// };
var isRectangleOverlap = function(rec1, rec2) {
    var abs = Math.abs;
    var x01 = rec1[0];
    var y01 = rec1[1];
    var x02 = rec1[2];
    var y02 = rec1[3];

    var x11 = rec2[0];
    var y11 = rec2[1];
    var x12 = rec2[2];
    var y12 = rec2[3];
    var zx = abs(x01 + x02 -x11 - x12);  
    var x  = abs(x01 - x02) + abs(x11 - x12);  
    var zy = abs(y01 + y02 - y11 - y12);  
    var y  = abs(y01 - y02) + abs(y11 - y12);  
    if(zx < x && zy < y)  
        return true;  
    else  
        return false;  
}


var testCases = [
    {input1:[0,0,2,2],input2:[1,1,3,3],except:true},
    {input1:[0,0,1,1],input2:[1,0,2,1],except:false},
    {input1:[0,0,0,0],input2:[0,0,0,0],except:false},
    {input1:[1,1,2,2],input2:[1,1,2,2],except:true},
    {input1:[7,8,13,15],input2:[10,8,12,20],except:true},
];

testCases.forEach((c)=>{
    var r =  isRectangleOverlap(c.input1,c.input2);
    if(r == c.except){
        console.log("pass");
    }else{
        console.warn(`errow:r=${r},except:${c.except}`)
    }
})
