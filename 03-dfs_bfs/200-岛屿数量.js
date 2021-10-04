/**
 * @param {character[][]} grid
 * @return {number}
 */
// 1.dfs 深度搜索 
 var numIslands = function(grid) {
    if(grid == null || grid.length == 0)
    return 0;
    let res = 0;
    let row = grid.length;   
    let col = grid[0].length;  
    // 开始遍历 grid 用两个for 循环
    for(let i = 0;i<row;i++){
        for(let j = 0;j<col;j++){           
            if(grid[i][j]=='1'){
                // 碰到第一个 1 res先加1 然后开始同化
                res++;
                
                dfs(grid,i,j,row,col);
            }
        }
    }
    return res;
};

function  dfs(grid,x,y,row,col) {
    // 递归需要一个出去的条件 grid[x][y]=='0' 表示 当前元素是水域 没有必要找它的上下左右了 回去重新开始找 1
    if(x<0 || y<0 || x>=row || y>=col || grid[x][y]=='0')
    return;
    // 到了这一步 说明 grid[x][y]== '1' 所以开始同化
    grid[x][y] = '0';
    dfs(grid,x+1,y,row,col);
    dfs(grid,x-1,y,row,col);
    dfs(grid,x,y+1,row,col);
    dfs(grid,x,y-1,row,col);
}

const res = numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]);
  
 
console.log(res);