var findMinArrowShots = function(points) {
    if(points.length == 1) return 1;
    points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
     let count = 1;
    
     // 左边界 points[i][0] 右边界 points[i][1]    
     for(let i = 1;i<points.length;i++){
         if(points[i][0]>points[i-1][1]){
             count++;
            
         }  
         else{
              points[i][1]= Math.min(points[i][1],points[i-1][1])
         }     
     }
     return count;
};
points =[[10,16],[2,8],[1,6],[7,12]]
const res = findMinArrowShots(points);
console.log(res);