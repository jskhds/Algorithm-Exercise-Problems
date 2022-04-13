/**
 * 输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"


 */

var compareVersion = function(v1, v2) {
    let i = 0, j = 0;
    while(i < v1.length || j < v2.length)
    {
        let num1 = 0, num2 = 0;
        while(i < v1.length && v1[i] != '.') num1 = num1 * 10 + v1[i++] - '0';
        while(j < v2.length && v2[j] != '.') num2 = num2 * 10 + v2[j++] - '0';
        if(num1 > num2) return 1;
        else if( num1 < num2) return -1;
        i++,j++;
    }
    return 0;
}