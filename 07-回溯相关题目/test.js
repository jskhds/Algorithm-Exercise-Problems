/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    if(strs.length<=1) return strs
     res = []
   for(let i = 0;i<strs.length;i++){
       for(let j = i+1;j<strs.length;j++){
           if(isAnagram(strs[i],strs[j])){
               res[i].push(strs[j])
           }
       }
   }
    
    return res
};

function isAnagram(a,b){      
        if(a.length !== b.length) return false       
        let len = 0
        for(let i = 0;i<a.length;i++){
            for(let j = 0;j<b.length;j++){
                if(a[i] === b[j]){
                    b[j] = 'A'
                    len++
                    continue
                }
            }
        }
        let  flag = len === a.length?true:false
        return flag
    }

    let res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    console.log(res);