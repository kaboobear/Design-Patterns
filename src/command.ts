class Engine{
    turnOn(){
        console.log("Engine was turned On");
    }

    turnOff(){
        console.log("Engine was turned Off");
    }
}

abstract class Command {
    private engine:Engine;

    constructor(engine:Engine){
        this.engine = engine;
    }

    getEngine():Engine{
        return this.engine;
    }

    abstract execute():void;
}

class CommandOn extends Command{
    execute(){
        this.getEngine().turnOn();
    }
}

class CommandOff extends Command{
    execute(){
        this.getEngine().turnOff();
    }
}



class Driver{
    private command:Command;

    constructor(command:Command){
        this.command = command;
    }

    execute(){
        this.command.execute();
    }

    setCommand(command:Command):void{
        this.command = command;
    }
}



//-------Start-------

const engine = new Engine();
const commandOn = new CommandOn(engine);
const commandOff = new CommandOff(engine);

const driver = new Driver(commandOn);
driver.execute();

driver.setCommand(commandOff);
driver.execute();