abstract class Strategy{
    abstract make():void;
}

class FirstStrategy extends Strategy{
    make(){
        console.log("First make function")
    }
}

class SecondStrategy extends Strategy{
    make(){
        console.log("Second make function")
    }
}

class ThirdStrategy extends Strategy{
    make(){
        console.log("Third make function")
    }
}

class Context{
    private strategy:Strategy;

    constructor(strategy:Strategy){
        this.strategy = strategy
    }

    setStrategy(strategy:Strategy){
        this.strategy = strategy;
    }

    makeSmth(){
        this.strategy.make();
    }
}


//---------Start----------

const str1 = new FirstStrategy();
const str2 = new SecondStrategy();
const str3 = new ThirdStrategy();

const context = new Context(str1);
context.makeSmth();

context.setStrategy(str2);
context.makeSmth();

context.setStrategy(str3);
context.makeSmth();