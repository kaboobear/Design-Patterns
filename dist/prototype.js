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
var Instrument = /** @class */ (function () {
    function Instrument(name, type) {
        this.name = name;
        this.type = type;
    }
    Instrument.prototype.getName = function () {
        return this.name;
    };
    Instrument.prototype.getType = function () {
        return this.type;
    };
    return Instrument;
}());
var Drums = /** @class */ (function (_super) {
    __extends(Drums, _super);
    function Drums(name, type, count) {
        var _this = _super.call(this, name, type) || this;
        _this.count = 4;
        _this.count = count;
        return _this;
    }
    Drums.prototype.getCount = function () {
        return this.count;
    };
    Drums.prototype.setCount = function (count) {
        this.count = count;
    };
    Drums.prototype.showInstrument = function () {
        console.log("\nName: " + this.getName() + "\nType: " + this.getType() + "\nCount: " + this.getCount() + "\n        ");
    };
    Drums.prototype.clone = function () {
        return new Drums(this.getName(), this.getType(), this.getCount());
    };
    return Drums;
}(Instrument));
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar(name, type, strings) {
        var _this = _super.call(this, name, type) || this;
        _this.strings = 6;
        _this.strings = strings;
        return _this;
    }
    Guitar.prototype.getStrings = function () {
        return this.strings;
    };
    Guitar.prototype.setStrings = function (strings) {
        this.strings = strings;
    };
    Guitar.prototype.showInstrument = function () {
        console.log("\nName: " + this.getName() + "\nType: " + this.getType() + "\nCount: " + this.getStrings() + "\n        ");
    };
    Guitar.prototype.clone = function () {
        return new Guitar(this.getName(), this.getType(), this.getStrings());
    };
    return Guitar;
}(Instrument));
//-----------Start----------
//Make instrument and change strings count
var g1 = new Guitar("Guitar1", "Guitar", 6);
g1.showInstrument();
g1.setStrings(8);
//Make clone and show
var g1c = g1.clone();
g1c.showInstrument();
