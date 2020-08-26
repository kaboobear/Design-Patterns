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
var Strategy = /** @class */ (function () {
    function Strategy() {
    }
    return Strategy;
}());
var FirstStrategy = /** @class */ (function (_super) {
    __extends(FirstStrategy, _super);
    function FirstStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstStrategy.prototype.make = function () {
        console.log("First make function");
    };
    return FirstStrategy;
}(Strategy));
var SecondStrategy = /** @class */ (function (_super) {
    __extends(SecondStrategy, _super);
    function SecondStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondStrategy.prototype.make = function () {
        console.log("Second make function");
    };
    return SecondStrategy;
}(Strategy));
var ThirdStrategy = /** @class */ (function (_super) {
    __extends(ThirdStrategy, _super);
    function ThirdStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThirdStrategy.prototype.make = function () {
        console.log("Third make function");
    };
    return ThirdStrategy;
}(Strategy));
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.makeSmth = function () {
        this.strategy.make();
    };
    return Context;
}());
//---------Start----------
var str1 = new FirstStrategy();
var str2 = new SecondStrategy();
var str3 = new ThirdStrategy();
var context = new Context(str1);
context.makeSmth();
context.setStrategy(str2);
context.makeSmth();
context.setStrategy(str3);
context.makeSmth();
