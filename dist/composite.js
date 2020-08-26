var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone() {
        var _this = _super.call(this, "Phone", 200) || this;
        console.log("Phone was Added");
        return _this;
    }
    return Phone;
}(Product));
var Tablet = /** @class */ (function (_super) {
    __extends(Tablet, _super);
    function Tablet() {
        var _this = _super.call(this, "Tablet", 300) || this;
        console.log("Tablet was Added");
        return _this;
    }
    return Tablet;
}(Product));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        var _this = _super.call(this, "Laptop", 500) || this;
        console.log("Laptop was Added");
        return _this;
    }
    return Laptop;
}(Product));
var Composite = /** @class */ (function () {
    function Composite() {
        this.products = [];
    }
    Composite.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Composite.prototype.getSum = function () {
        return this.products.reduce(function (acc, elem) {
            return acc += elem.getPrice();
        }, 0);
    };
    return Composite;
}());
//----------Start-----------
var phone1 = new Phone();
var tablet1 = new Tablet();
var laptop1 = new Laptop();
var phone2 = new Phone();
var composite = new Composite();
composite.addProduct(phone1);
composite.addProduct(tablet1);
composite.addProduct(laptop1);
composite.addProduct(phone2);
console.log("Final sum: " + composite.getSum());
