var all= ["Lars", "Peter", "Jan", "Bo"];
const joined = all.join(",");
console.log(joined);

var numbers = [2, 3, 67, 33]; 

const reducer = (accumulator, currentValue)=>{
    return accumulator+currentValue;
}
const sum = numbers.reduce(reducer,0);
console.log(sum);
console.log("========================")

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]
var reducer2 = (accumulator, member,index,members) => {
    if(index === members.length-1){
        accumulator += member.age;
        return accumulator/members.length;
    }
    console.log(accumulator);
    return accumulator + member.age;
}   

const avg = members.reduce(reducer2,0);
console.log("Average age: " + avg);

console.log("================")
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

var voteReducer = (acc, vote, index, votes) => {
    console.log(vote);
    if(!acc["Clinton"]){
        console.log("No Clinton");
        acc["Clinton"] = 0;
    }
    if(!acc["Trump"]){
        console.log("No Trump");
        acc["Trump"] = 0;
    }
    if(!acc["None"]){
        console.log("No None");
        acc["None"] = 0;
    }
    if(vote === "Clinton"){
        return acc["Clinton"] += 1;
    }
    if(vote === "Trump"){
        return acc["Trump"] += 1;
    }
    if(vote === "None"){
        return acc["None"] += 1;
    }
}

const vote = votes.reduce(voteReducer,{});
console.log(vote);