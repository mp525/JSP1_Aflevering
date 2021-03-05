//Prototype exercise

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

function myFilter (callback){
    return callback(this);
}

Array.prototype.myFilter = myFilter;
console.log(Array.prototype);

const prot = arr.myFilter(callback);
console.log("Prototype filter: " + prot);