function loadImg(src) {
    // 首先 return new Promise 也就是 Promise的一个实例
    // 给这个实例传入的参数是函数（用箭头函数的形式<包括两个参数，一个resolve 一个 reject，这两个参数也是函数）
    const res = new Promise((resolve,reject) => {
        const img = document.createElement('img')
        // img 加载完成以后执行 resolve函数
        img.onload = () =>{
            resolve(img)
        }
        img.onerror = ()=>{
            const err = new Error(`图片加载失败${src}`)
            reject(err)
        }
        img.src = src
    
})
    return res

}

        const url1 = '/image/xiaoxin.jpg'
        const url2 = '/image/scene.jpg'

        // 这里加 ！ 是为了避免上面的语句没有打分号 使得函数不能正确识别
!(async function () {
    const  img1 = await loadImg(url1)
    console.log(img1.height,img1.width);

    const  img2 = await loadImg(url2)
    console.log(img2.height,img2.width);
    
})()