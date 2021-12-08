// code not following interface segregation

abstract class animal{
    public abstract void feed();
    public abstract void groom();
}

class dog extends animal{
    public void feed(){
        System.out.println("You can feed this dog animal");
    }
    public void groom(){
        System.out.println("You can groom this dog animal");
    }
}

class tiger extends animal{
    public void feed(){
        System.out.println("You can feed this tiger animal");
    }
    //we cacnnot groom a tiger but still we have to give the groom() function here, in order to keep the compiler happy
    public void groom(){
        System.out.println("You can groom this tiger animal");
    }
}


public class Main {
  public static void main(String[] args) {
    dog obj = new dog(); // Create a dog object
    tiger obj1 = new tiger();
    obj.feed();
    obj.groom();
    obj1.feed();
  }
}



//same code but following interface segregation:

abstract class animal{
    public abstract void feed();
    
}

abstract class pet{
    public abstract void feed();
    public abstract void groom();
}

class dog extends pet{
    public void feed(){
        System.out.println("You can feed this dog");
    }
    public void groom(){
        System.out.println("You can groom this dog");
    }
}


// now we do not have to rely upon any unnecesary function.
class tiger extends animal{
    public void feed(){
        System.out.println("You can feed this tiger");
    }
}


public class Main {
  public static void main(String[] args) {
    dog obj = new dog(); // Create a dog object
    tiger obj1 = new tiger();
    obj.feed();
    obj.groom();
    obj1.feed();
  }
}