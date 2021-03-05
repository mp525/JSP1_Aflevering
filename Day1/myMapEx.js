const arr = [1, 2, 3, 4];

const callback = (array)=>{
    let returnArr = [];
    for (let i = 0; i < array.length; i++) {
        let plus = array[i] + 1;
        returnArr.push(plus);
    }
    return returnArr;
}

function myMap(array, callback){
    return callback(array);
}

const mapped = myMap(arr,callback);
console.log("Before: " + arr);
console.log("After myMap: " + mapped);

const normMap = arr.map((item)=>{
    return item+1;
});

console.log("After map: " + normMap);