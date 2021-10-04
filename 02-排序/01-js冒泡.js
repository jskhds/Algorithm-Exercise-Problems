
const array = [23, 45, 18, 37, 92, 13, 24];
function sort(arr) {
    for (var i = 0; i < array.length; i++) {
        // j都是从0开始的 因为j需要从前往后排，最后一个数字是上一轮排好了的，所以不参与下次排序
        for (var j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return arr.toString();
}



console.log(sort(array));