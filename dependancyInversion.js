// small code following dependency inversion

//low level classes start-----------------------
class honda{
    constructor(price,number,currency){
        this.price=price;
        this.number=number;
        this.currency=currency;
    }
    
    description() {
        console.log(`Price of one vehicle is ${this.price} ${this.currency} and number of vehicles are ${this.number}. Total value is ${this.price*this.number} ${this.currency}`);
    }
}

class suzuki{
    constructor(price,number,currency){
        this.price=price;
        this.number=number;
        this.currency=currency;
    }
    
    description() {
        console.log(`Price of one vehicle is ${this.price} ${this.currency} and number of vehicles are ${this.number}. Total value is ${this.price*this.number} ${this.currency}`);
    }
}

class Maruti{
    constructor(price,number,currency){
        this.price=price;
        this.number=number;
        this.currency=currency;
    }
    
    description() {
        console.log(`Price of one vehicle is ${this.price} ${this.currency} and number of vehicles are ${this.number}. Total value is ${this.price*this.number} ${this.currency}`);
    }
}



//low level classes stop--------------------------

//making an interface : Starts--------------------

const informationOfCars=[new honda(20000,3,'Rs'),new suzuki(30000,5,'$'),new Maruti(15000,7,'Rs')];

// Interface ends----------------------------------

//High level function starts-----------------------

function mainStore(informationOfCars){
    informationOfCars.forEach((car,index)=>{
        console.log(`${index+1}`);
        car.description();
    });
}

//High level function ends-------------------------


mainStore(informationOfCars);

