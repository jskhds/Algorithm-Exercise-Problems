/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let gap = matrix.length - 1
    let start = 0
    while(gap>0){
          // 推导坐标的过程在我草稿的185页
        //   看的视频是这个 https://www.bilibili.com/video/BV1Ct4y1C7zf?from=search&seid=7803335351463042612&spm_id_from=333.337.0.0
        for(let i = 0;i<gap;i++){
            [matrix[start][start+i],matrix[start+i][gap+start],matrix[gap+start][gap+start-i],matrix[gap+start-i][start]]
            = [matrix[gap+start-i][start],matrix[start][start+i],matrix[start+i][gap+start],matrix[gap+start][gap+start-i]]
             
        }
        start+=1
        gap-=2
    }
    
    return matrix

};

let res = rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
console.log(res);