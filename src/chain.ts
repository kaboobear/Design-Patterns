class Card{
    private next:Card = null;
    private balance:number;
    private title:string;


    constructor(title:string,balance:number){
        this.balance = balance;
        this.title = title;
    }

    pay(amount:number):void{
        if(amount <= this.balance){
            console.log(amount + "$ was withdrawed from your " + this.title + " card")
            this.balance -= amount;
        }
        else if(this.next){
            console.log("Not enough money on your " + this.title + " card")
            this.next.pay(amount);
        }
        else{
            console.log("Sorry, you don't have enough money")
        }
    }

    setNext(next:Card):void{
        this.next = next;
    }

    show():void{
        console.log(this.balance + "$ on your " + this.title + " card")
    }
}



//---------Start---------

const VisaCard = new Card("Visa",100);
const MasterCard = new Card("Master",200);
const PayPal = new Card("PayPal",500);

VisaCard.setNext(MasterCard);
MasterCard.setNext(PayPal);



VisaCard.show();
MasterCard.show();
PayPal.show();
console.log("\n");

VisaCard.pay(250);
console.log("\n");

VisaCard.show();
MasterCard.show();
PayPal.show();