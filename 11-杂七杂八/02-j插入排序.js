const array = ['cap'
,'to'
,'cat'
,'card'
,'two'
,'too'
,'up'
,'boat'
,'boot'];
for (i = 0; i < array.length; i++) {
    console.log('i:'+i);
    for (j = i; j > 0; j--) {
        console.log('j:'+j);
        if (array[j] < array[j - 1]) {
            const temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;

        }
    }

}
for (i = 0; i < array.length; i++)
    console.log(array);
