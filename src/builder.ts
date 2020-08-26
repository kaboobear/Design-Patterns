class House {
    private parts:Array<string> = [];

    showParts(){
        this.parts.map((elem,ind)=>{
            console.log(`${ind+1}. ${elem}`)
        })
        console.log('\n');
    }

    addPart(part:string){
        this.parts = [...this.parts,part];
    }
}

abstract class Builder{
    abstract setWalls():void;
    abstract setRoof():void;
    abstract setDoors():void;
    abstract getHouse():House;
}


class WoodBuilder extends Builder{
    private product:House;

    constructor(){
        super();
        this.reset();
    }

    reset(){
        this.product = new House;
    }

    setWalls(){
        this.product.addPart("Wood Walls");
    }

    setRoof(){
        this.product.addPart("Wood Roof");
    }

    setDoors(){
        this.product.addPart("Wood Doors");
    }

    getHouse():House{
        return this.product;
    }
}

class IronBuilder extends Builder{
    private product:House;

    constructor(){
        super();
        this.reset();
    }

    reset(){
        this.product = new House;
    }

    setWalls(){
        this.product.addPart("Iron Walls");
    }

    setRoof(){
        this.product.addPart("Iron Roof");
    }

    setDoors(){
        this.product.addPart("Iron Doors");
    }

    getHouse():House{
        return this.product;
    }
}

class Director{
    private builder:Builder;

    setBuilder(builder:Builder){
        this.builder = builder;
    }

    buildWoodHouse(){
        this.builder.setWalls();
        this.builder.setRoof();
        this.builder.setDoors();
        return this.builder.getHouse();
    }

    buildIronHouse(){
        this.builder.setWalls();
        this.builder.setRoof();
        this.builder.setDoors();
        return this.builder.getHouse();
    }
}






//-----------Start-----------

//Create director and builders
const director:Director = new Director();
const ironBuilder:IronBuilder = new IronBuilder();
const woodBuilder:WoodBuilder = new WoodBuilder();

//Make wood house
director.setBuilder(woodBuilder);
const woodHouse = director.buildWoodHouse();
woodHouse.showParts();

//Make iron house
director.setBuilder(ironBuilder);
const ironHouse = director.buildIronHouse();
ironHouse.showParts();