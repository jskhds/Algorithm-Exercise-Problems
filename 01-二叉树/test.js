let a = 2;
let b = 200;
let ans = 1;
let base = 1337
while(b){
    if(b%2==1){
        ans = (a * ans) % base
    }
    a = (a * a) % base
    b = parseInt(b/2)
}
console.log(ans);
