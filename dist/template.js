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
var AI = /** @class */ (function () {
    function AI() {
    }
    AI.prototype.turn = function () {
        this.collect();
        this.build();
        this.attack();
    };
    AI.prototype.build = function () {
        console.log("Building...");
    };
    AI.prototype.collect = function () {
        console.log("Collecting...");
    };
    return AI;
}());
var HumansAI = /** @class */ (function (_super) {
    __extends(HumansAI, _super);
    function HumansAI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HumansAI.prototype.attack = function () {
        console.log("Humans style attack...");
    };
    return HumansAI;
}(AI));
var OrcsAI = /** @class */ (function (_super) {
    __extends(OrcsAI, _super);
    function OrcsAI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrcsAI.prototype.attack = function () {
        console.log("Orcs style attack...");
    };
    return OrcsAI;
}(AI));
//--------Start---------
var humans = new HumansAI();
var orcs = new OrcsAI();
humans.turn();
console.log('');
orcs.turn();
