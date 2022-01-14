/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let map = {}
    let inD = new Array(numCourses).fill(0)
    let count = 0
    let queue = []   
   //  先记录所有课的入度 和 邻接表 value(课程名): [依赖这门课的所有课数组]
   for(let i = 0;i<prerequisites.length;i++){
       inD[prerequisites[i][0]]++
       if(map[prerequisites[i][1]]){
           map[prerequisites[i][1]].push(prerequisites[i][0])
       }else{
           // 注意这里 map 的 value 是数组 所以赋值的时候要再加一个 [] 表示这是数组
           map[prerequisites[i][1]] =[ prerequisites[i][0]]
       }
   }
   // 把所有入度为 0 也就是所有不需要先修课的课程放进队列中之后用
   for(let i = 0; i< inD.length;i++){
       if(inD[i]===0){
           queue.push(i)
       }
   }
    
   
   while(queue.length){ 
       let selected = queue.shift()
       count++
       // 把依赖 selected 的课程都拿出来单独成为一个数组
       rely = map[selected]
       if(rely&&rely.length){  
           for(let i = 0;i<rely.length;i++){
               inD[rely[i]]--
           if(inD[rely[i]] === 0){
               queue.push(rely[i])            
           }
       } 
       }   
   }

   return count === numCourses
};