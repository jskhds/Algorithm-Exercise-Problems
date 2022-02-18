var uniquePaths = function(m, n) {
    const arr= new Array(m).fill(0).map(() => new Array(n).fill(0));
    // i是横坐标  j是纵坐标  
   for(let i=0;i<m;i++) arr[i][0]=1;
   for(let j=0;j<n;j++) arr[0][j]=1;
   for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
}
return arr[m - 1][n - 1];
};


var uniquePaths1 = function (m, n) {
    if (m === 1 || n === 1) {
      return  1
    }
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
  }
  console.log(uniquePaths1(7,3)) // 28