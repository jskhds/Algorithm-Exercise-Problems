function createCache() {
    let data = {}
    return {
        // set: function(key,value){} 格式也是对的
        set(key,value){
            data[key] = value
        },
        get(key){
            return data[key]
        }
    }
    
}
const fn1 = createCache()
fn1.set("age",18)
console.log(fn1.get("age"));
