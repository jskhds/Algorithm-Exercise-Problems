/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
 
 var findAllPeople = function(n, meetings, firstPerson) {
    const know = new Array(n).fill(false)
    know[0] = true
    know[firstPerson] = true
    const ds = new DisjointSet(n)
    ds.union(firstPerson, 0)
    const map = new Map()
    for(let [x, y, t] of meetings){
      if(!map.has(t)) map.set(t, [])
      map.get(t).push([x,y])
    }
    const arr = [...map.keys()]
    arr.sort((a,b) => a-b)
    for(let time of arr){
      const ms = map.get(time)
      ms.sort((a,b) => {
        let [a1, a2] = a, [b1, b2] = b
        if(know[a1] || know[a2]){
          know[a1] = true
          know[a2] = true
          return -1
        }
        if(know[b1] || know[b2]){
          know[b1] = true
          know[b2] = true
          return 1
        }
        return -1
      })
      for(let [x, y] of ms){
        let xx = ds.findParent(x), yy = ds.findParent(y)
        if(know[xx] || know[yy]){
          know[xx] = true
          know[yy] = true
          ds.union(x,y)
        }
      }
    }
    const ret = []
    for(let i = 0; i<n; i++){
      if(know[i]) ret.push(i)
    }
    return ret
  };
  
  // 并查集
  class DisjointSet{
    constructor(n){
        this.parent = new Array(n).fill(0).map((_,idx) => idx)
        // 以i为根结点的子集大小
        this.size = new Array(n).fill(1)
        // 子集个数
        this.count = n
    }
    // 查找根元素
    findParent(x){
        if(this.parent[x] === x) return x
        return this.findParent(this.parent[x])
    }
    // 合并a、b集合
    union(a, b){
        const { parent, size } = this
        let x = this.findParent(a), y = this.findParent(b)
        if(x !== y){
            if(size[x] < size[y]){
                [x, y] = [y, x]
            }
            parent[y] = x
            size[x] += size[y];
            this.count -= 1
            return true
        }
        return false
    }
    // a、b集合是否相连
    isConnected(a, b){
        return this.findParent(a) === this.findParent(b)
    } 
   
  };