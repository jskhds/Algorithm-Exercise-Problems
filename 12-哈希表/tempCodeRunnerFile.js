str = 'qqqaaafffbbb';
let map = new Map();
    for(let i = 0;i<str.length;i++){
        if(map.has(str[i])) map.set(str[i],map.get(str[i])+1);
        else map.set(str[i],1);
    }
    console.log(map);
for(let [key,value] of map){
    console.log(key + " = " + value);
}