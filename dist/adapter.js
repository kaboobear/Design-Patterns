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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function (engine) {
        engine.startPipe1();
    };
    return Car;
}());
var Engine1 = /** @class */ (function () {
    function Engine1() {
    }
    Engine1.prototype.startPipe1 = function () {
        console.log("Engine 1 Started");
    };
    return Engine1;
}());
var Engine2 = /** @class */ (function () {
    function Engine2() {
    }
    Engine2.prototype.startPipe2 = function () {
        console.log("Engine 2 Started");
    };
    return Engine2;
}());
var Engine2Adapter = /** @class */ (function (_super) {
    __extends(Engine2Adapter, _super);
    function Engine2Adapter(engine) {
        var _this = _super.call(this) || this;
        _this.engine = engine;
        return _this;
    }
    Engine2Adapter.prototype.startPipe1 = function () {
        this.engine.startPipe2();
    };
    return Engine2Adapter;
}(Engine1));
//------------Start----------
var Mazda = new Car();
var EngineOne = new Engine1();
var EngineTwo = new Engine2();
Mazda.startEngine(EngineOne);
// Mazda.startEngine(EngineTwo);          Error
Mazda.startEngine(new Engine2Adapter(EngineTwo));
