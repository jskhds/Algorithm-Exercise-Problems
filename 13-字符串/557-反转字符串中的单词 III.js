/**
 * @param {string} s
 * @return {string}
 */
//输入："Let's take LeetCode contest"
//输出："s'teL ekat edoCteeL tsetnoc"
 var reverseWords = function(s) {
    let res = []
    let path = []
    let arr = s.split(" ")
    for(let i = 0;i<arr.length;i++){
        path = []
        for(let j = arr[i].length-1;j>=0;j--){
            path.push(arr[i][j])
        }
        res.push(path.slice().join(""))    
    }
    return res.join(" ")
};