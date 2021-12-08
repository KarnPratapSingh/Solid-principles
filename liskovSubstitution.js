// code not following liskov substitution:
class bird{
    fly(){
        console.log("i can fly");
    }
}


// pigeon class passes the Liskov substitution principle
class pigeon extends bird{
    say(){
        console.log("I am white in color");
    }
}


//penguine class does not. (As it works differently than it's parent class)
class penguine extends bird{
    fly(){
        throw new error('I cannot fly');
    }

    swim(){
        console.log('I can certainly swim');
    }
}


function makeBirdFly(bird) {
    bird.fly();
}

const Pigeon=new pigeon();
const Penguine=new penguine();

makeBirdFly(Pigeon);
makeBirdFly(Penguine);


// same code, but following liskov substitution:

//Solution:

class flyingBird{
    fly(){
        console.log("i can fly");
    }
}

class swimmingBird{
    swim(){
        console.log("I can swim");
    }
}


// pigeon class passes the Liskov substitution principle
class pigeon extends flyingBird{
    say(){
        console.log("I am white in color");
    }
}


//penguine class now does pass liskov principle. 
//(As it works same as it's parent class)
class penguine extends swimmingBird{
   
}


function makeFlyingBirdFly(bird) {
    bird.fly();
}

function makeSwimmingBirdSwim(bird){
    bird.swim();
}

const Pigeon=new pigeon();
const Penguine=new penguine();

makeFlyingBirdFly(Pigeon);
makeSwimmingBirdSwim(Penguine);