var exist = function(board, word) {
    let m = board.length
    let n = board[0].length
    let w = word.length
    let used = new Array(m).fill(false).map(()=>new Array(n).fill(false))
    
    const backTracking = (i,j,index)=>{
        // 终止条件
        if(index >= w) return true
        // 单层递归？
        if(i <0 || i  >=m || j <0 || j >=n) return false
        if( used[i][j]  ||  board[i][j] != word[index]) {             
            return false
        }
        // 当前节点可以匹配的情况
        used[i][j] = true
        let flag = 
        backTracking(i+1,j,index+1)||backTracking(i,j+1,index+1)
        ||backTracking(i-1,j,index+1)||backTracking(i,j-1,index+1)
        if(flag) return true
        used[i][j] = false
        return false
    }
    // 调用
    for(let i = 0;i<m;i++){
        for(let j= 0;j<n;j++){   
            let res = backTracking(i,j,0)       
            if(res ){
                return true
            }
        }
    }
    return false  
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word = "ABCCEDG"
 
const res = exist(board,word)
console.log(res);