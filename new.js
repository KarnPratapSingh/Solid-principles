//open closed principle. 23rd Nov '21

class AddCommand{
    constructor(valueToAdd){
        this.valueToAdd=valueToAdd;
        this.currentValue=0;
    }

    execute(currentValue){
        this.currentValue=currentValue;
        console.log(this.currentValue+this.valueToAdd);
    }
}

class SubtractCommand{
    constructor(valueToSubtract){
        this.valueToSubtract=valueToSubtract;
        this.currentValue=0;
    }
    execute(currentValue){
        this.currentValue=currentValue;
        console.log(this.currentValue-this.valueToSubtract);
    }
}



const commands=[new AddCommand(10), 
new SubtractCommand(10)];



function calculator(commands){
    commands.forEach((command)=>{
        command.execute(100);
    })

}

calculator(commands);

//-------------------------------------------------------------------------------------------


//-----------------------Dependency Inversion------------------------------------------------
// In the above example:

/* We can assume that the high level function is the 'calculator' function and the low level functions
are the classes that we are creating like the AddCommand or the SubtractCommand. Now our high level function that 
is the calculator class does not have to depend upon the low level functions, i.e; Add or Subtract.

So we are using and interface that first interacts with all the low level functions and then sends a common info
to the high function, for it to execute. Thus our high level function does not have to depend upon the low levels.
Rather we can interact with the interface only. */

