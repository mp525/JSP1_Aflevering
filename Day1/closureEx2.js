var person = (function(){
    var age = 0;
    var name = "";

    function info(){
        return `${name}, ${age}`
    }

    function setAge(val){
        age = val;
    }

    function setName(val){
        name = val;
    }

    return {
        info,
        setAge,
        setName
    }

})();

person.setAge(10);
person.setName("Kim");
console.log(person.info());