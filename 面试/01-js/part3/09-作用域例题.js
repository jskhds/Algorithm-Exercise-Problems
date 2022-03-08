function fn1(){
    let a = 100
    fn2()
    function fn2(){  
        let a1 = 200
        
        function fn3(){
            let a2 = 300
            return a + a1 + a2
        }
        return fn3()
    }
   return  fn2()
}
let res1 = fn1()
console.log(res1)