var Mediator = /** @class */ (function () {
    function Mediator() {
        this.customers = [];
    }
    Mediator.prototype.orderAuto = function (name, title, count) {
        this.saveCustomer(name);
        console.log(name + " ordered " + count + "x " + title);
    };
    Mediator.prototype.saveCustomer = function (name) {
        this.customers.push(name);
    };
    Mediator.prototype.showCustomers = function () {
        console.log("Customers:");
        this.customers.map(function (elem, id) {
            console.log(id + ". " + elem);
        });
        console.log('');
    };
    return Mediator;
}());
var Customer = /** @class */ (function () {
    function Customer(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    Customer.prototype.makeOrder = function (title, count) {
        this.mediator.orderAuto(this.name, title, count);
    };
    return Customer;
}());
//-----------Start-----------
var mediator = new Mediator();
var cust1 = new Customer("Max", mediator);
var cust2 = new Customer("Jack", mediator);
var cust3 = new Customer("Polli", mediator);
cust1.makeOrder("Mazda", 2);
console.log("");
mediator.showCustomers();
cust2.makeOrder("Opel", 1);
console.log("");
mediator.showCustomers();
cust3.makeOrder("Toyota", 4);
console.log("");
mediator.showCustomers();
