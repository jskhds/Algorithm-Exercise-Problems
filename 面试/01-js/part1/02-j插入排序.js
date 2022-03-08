const array = [23, 45, 18, 37, 92, 13, 24];
for (i = 0; i < array.length; i++) {
    for (j = i; j > 0; j--) {
        if (array[j] < array[j - 1]) {
            const temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;

        }
    }

}
for (i = 0; i < array.length; i++)
    console.log(array);
