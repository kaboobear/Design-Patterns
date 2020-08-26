abstract class AI{
    turn(){
        this.collect();
        this.build();
        this.attack();
    }

    abstract attack():void;

    build(){
        console.log("Building...");
    }

    collect(){
        console.log("Collecting...");
    }
}

class HumansAI extends AI{
    attack(){
        console.log("Humans style attack...");
    }
}

class OrcsAI extends AI{
    attack(){
        console.log("Orcs style attack...");
    }
}




//--------Start---------

const humans = new HumansAI();
const orcs = new OrcsAI();

humans.turn()
console.log('');
orcs.turn();