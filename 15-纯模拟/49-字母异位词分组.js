/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {
    // 对于一个 str， 先对它进行数组排序，然后再变成字符串作为 map 的key，原来的str 作为 value
    // 如果是字母异位词的话，经过这样操作彼此的 key 就是一样的 
    // list 是承载相同 key 的 value 数组，所以要先判断 map 里面有没有当前key，有的话 list 就等于 map.get(key)然后再push当前 key 的 str
    // 没有的话就另开一个数组
    let map = new Map()
    for(let str of strs){
        let array = Array.from(str)
        array.sort()
        let key = array.toString()
        let list = map.get(key)?map.get(key):new Array()
        list.push(str)
        map.set(key,list)
    }
    return Array.from(map.values()) 
    }