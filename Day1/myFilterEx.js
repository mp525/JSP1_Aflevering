const arr = [1, 2, 3, 4];

const callback = (array)=>{
    let returnArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 3){
            returnArr.push(array[i]);
        }
        
    }
    return returnArr;
}

function myFilter (array, callback){
    return callback(array);
}

const filtered = myFilter(arr, callback);
console.log("Before: " + arr);
console.log("After myFilter: " +filtered);

const normFilter = arr.filter((item)=>{
    return item < 3;
})
console.log("After filter: " + normFilter);

