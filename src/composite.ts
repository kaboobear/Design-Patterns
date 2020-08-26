abstract class Product{
    private name:string;
    private price:number;

    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    }

    getPrice():number{
        return this.price;
    }
}

class Phone extends Product{
    constructor(){
        super("Phone",200)
        console.log("Phone was Added");
    }
}

class Tablet extends Product{
    constructor(){
        super("Tablet",300)
        console.log("Tablet was Added");
    }
}

class Laptop extends Product{
    constructor(){
        super("Laptop",500)
        console.log("Laptop was Added");
    }
}

class Composite{
    private products: Array<Product>;

    constructor(){
        this.products = [];
    }

    addProduct(product: Product){
        this.products.push(product);
    }

    getSum():number{
        return this.products.reduce((acc,elem)=>{
            return acc += elem.getPrice();
        },0)
    }
}




//----------Start-----------

const phone1 = new Phone();
const tablet1 = new Tablet();
const laptop1 = new Laptop();
const phone2 = new Phone();

const composite = new Composite();
composite.addProduct(phone1);
composite.addProduct(tablet1);
composite.addProduct(laptop1);
composite.addProduct(phone2);
console.log("Final sum: " + composite.getSum()) 