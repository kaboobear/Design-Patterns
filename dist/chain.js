var Card = /** @class */ (function () {
    function Card(title, balance) {
        this.next = null;
        this.balance = balance;
        this.title = title;
    }
    Card.prototype.pay = function (amount) {
        if (amount <= this.balance) {
            console.log(amount + "$ was withdrawed from your " + this.title + " card");
            this.balance -= amount;
        }
        else if (this.next) {
            console.log("Not enough money on your " + this.title + " card");
            this.next.pay(amount);
        }
        else {
            console.log("Sorry, you don't have enough money");
        }
    };
    Card.prototype.setNext = function (next) {
        this.next = next;
    };
    Card.prototype.show = function () {
        console.log(this.balance + "$ on your " + this.title + " card");
    };
    return Card;
}());
//---------Start---------
var VisaCard = new Card("Visa", 100);
var MasterCard = new Card("Master", 200);
var PayPal = new Card("PayPal", 500);
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
