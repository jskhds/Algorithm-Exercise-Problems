/**
 * 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。
 * 每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。
 *请你重新构造并返回输入数组 people 所表示的队列。
 *返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。
 */

 /**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // 将people按身高从大到小排序，如果身高一样则将前面高于自己人数小的人放在前面
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
    // 创建新数组 ans
    let ans = []
    for (let i = 0; i < people.length; i++) {
        // 挨个根据前面高于自己人数插入到ans里
        // 因为people已按照身高排序，所以某个人被插入到ans里时，所有比他高的都已经在ans里了
        // 而身高比他矮的人怎样插入到ans里都不影响前面高于他的人数
        // 所以这样得到的数组就是符合我们要求的队列
        // splice(插入操作的索引，删除元素数量，插入的元素)
        ans.splice(people[i][1],0,people[i])
    }
    return ans

};
const res = reconstructQueue( [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])
console.log(res);


let people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
console.log(people[0]);