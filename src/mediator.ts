class Mediator {
  private customers: Array<string> = [];

  orderAuto(name: string, title: string, count: number) {
    this.saveCustomer(name);
    console.log(name + ' ordered ' + count + 'x ' + title);
  }

  saveCustomer(name: string) {
    this.customers.push(name);
  }

  showCustomers() {
    console.log('Customers:');
    this.customers.map((elem, id) => {
      console.log(id + '. ' + elem);
    });
    console.log('');
  }
}

class Customer {
  private name: string;
  private mediator: Mediator;

  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  makeOrder(title: string, count: number) {
    this.mediator.orderAuto(this.name, title, count);
  }
}

//-----------Start-----------

const mediator = new Mediator();

const cust1 = new Customer('Max', mediator);
const cust2 = new Customer('Jack', mediator);
const cust3 = new Customer('Polli', mediator);

cust1.makeOrder('Mazda', 2);
console.log('');
mediator.showCustomers();

cust2.makeOrder('Opel', 1);
console.log('');
mediator.showCustomers();

cust3.makeOrder('Toyota', 4);
console.log('');
mediator.showCustomers();
