//Constructor funktion
function Car(make, model){
    this.make = make;
    this.model = model;
    this.showThis = function(){
        console.log(this);
    }
    this.show = function(){
        console.log(`${this.make}, ${this.model}`)
    }
    this.showAsync = function(){
        //Løsning: oprindelige this bliver gemt i "self"
        //const self = this;
        //Nedenstående function kunne også gøres til arrow funktion, ville løse problemet
        setTimeout(function(){
            //Løsning:
            // console.log(self.make + ", " + self.model);
            console.log(this.make + ", " + this.model);
        }, 0);
    }
}

const car1 = new Car("Volvo", "V78");
const car2 = new Car("WW", "Golf");

//This peger på det til venstre for punktum
car1.showThis();
car2.showThis();
console.log();

//Det samme her
car1.show();
car2.show();
console.log();

//Her peger this ikke på noget
car1.showAsync();
car2.showAsync();