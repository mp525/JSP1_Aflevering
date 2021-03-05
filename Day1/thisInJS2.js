//Klassekomponent eksempel med this
class Car {
    constructor(make, model){
        this._make = make;
        this._model = model;
        //Løsning på asynkront this problem:
        //this.show = this.show.bind(this)
        //det fortæller show metoden at det altid er den this der skal bruges
    }

    show = function(){
        console.log(`${this._make}, ${this._model}`)
    }

    showAsync = function(){
        //Asynkront virker this ikke her
        //Hvis jeg omskrev "show" til en arrow funktion, ville det virke
        setTimeout(this.show,1000);
    }

    get make(){
        return this._make;
    }
    set make(make){
        this._make = make;
    }
}

const car1 = new Car("Volvo", "V78");
const car2 = new Car("WW", "Golf");

car1.show();
car2.show();
console.log();

car1.showAsync();
car2.showAsync();
