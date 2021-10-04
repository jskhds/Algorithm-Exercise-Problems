var json = {};
var str = 'hdasfhasfawqrhhewaaaaaadjs';
//遍历str,循环其中的每一个字符，将某个字符的值及出现的个数拿出来作为json的key和value
// json[str.charAt(i)] /json[i]是key 它的值也就是这个字符出现的次数是value
for (var i = 0; i < str.length; i++) {
    //判断json中是否有当前str的值
    if (!json[str.charAt(i)]) {
        //如果不存在 就将当前值添加到json中去，并设置1
        json[str.charAt(i)] = 1;
    } else {
        //如果存在的话就让数组中已有的当前值的value值++；
        json[str.charAt(i)]++;
    }
};
var iMax = 0;
var iIndex = '';
//遍历json  使用打擂算法统计需要的值
for (var i in json) {
    //如果当前项大于下一项
    if (json[i] > iMax) {
        //就让当前值更改为出现最多次数的值
        iMax = json[i];
        iIndex = i;
    }
}
console.log('出现最多的是：' + iIndex + '出现' + iMax + '次');