var array = [1, 2, 3, 4, 5];
function reverse() {
    var newArray = [];
    for (i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray;
}

str = reverse(array);


