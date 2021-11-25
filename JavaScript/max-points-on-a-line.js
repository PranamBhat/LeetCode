/**
 * @param {number[][]} points
 * @return {number}
 */

var maxPoints = function(points) {

    let map = new Map();
    if(points.length=== 1){
        return 1;
    }
    for(let i=0; i< points.length-1; i++){
        for (let j= i+1; j< points.length; j++){
            let x= points[i];
            let y= points[j];
            let s = slope(x,y);
            let yInt = yIntercept(s, x);
            let key = s+"_"+yInt
            if(!map.has(key)){
                map.set(key, new Set());
            }
            map.get(key).add(i);
            map.get(key).add(j);
        }
    }
    return Math.max(...[...map.values()].map(set=>set.size));
};

let slope = (x, y)=>{
    return(y[1]-x[1])/(y[0]-x[0]);
}

let yIntercept = (slope, x)=>{
    if(slope === Infinity || slope === -Infinity){
        return x[0];
    }
    return x[1] - slope*x[0];
    
};
