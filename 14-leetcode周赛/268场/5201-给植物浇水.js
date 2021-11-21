/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
 var wateringPlants = function(plants, capacity) {
    let step = 0;
    let fullC = capacity;
    let len = plants.length;
    for(let i = 0;i<len;i++){
        if(capacity>=plants[i]){
            capacity -= plants[i];
            step++;
}
        else{
            capacity = fullC-plants[i];
            step+=(2*i+1);
}
      
}
        return step;
};