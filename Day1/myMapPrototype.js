const arr = [1, 2, 3, 4];

const callback = (array)=>{
    let returnArr = [];
    for (let i = 0; i < array.length; i++) {
        let plus = array[i] + 1;
        returnArr.push(plus);
    }
    return returnArr;
}

function myMap(callback){
    return callback(this);
}

Array.prototype.myMap = myMap;
const myMapped = arr.myMap(callback);
console.log(myMapped);