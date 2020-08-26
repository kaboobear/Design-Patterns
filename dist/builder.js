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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var House = /** @class */ (function () {
    function House() {
        this.parts = [];
    }
    House.prototype.showParts = function () {
        this.parts.map(function (elem, ind) {
            console.log(ind + 1 + ". " + elem);
        });
        console.log('\n');
    };
    House.prototype.addPart = function (part) {
        this.parts = __spreadArrays(this.parts, [part]);
    };
    return House;
}());
var Builder = /** @class */ (function () {
    function Builder() {
    }
    return Builder;
}());
var WoodBuilder = /** @class */ (function (_super) {
    __extends(WoodBuilder, _super);
    function WoodBuilder() {
        var _this = _super.call(this) || this;
        _this.reset();
        return _this;
    }
    WoodBuilder.prototype.reset = function () {
        this.product = new House;
    };
    WoodBuilder.prototype.setWalls = function () {
        this.product.addPart("Wood Walls");
    };
    WoodBuilder.prototype.setRoof = function () {
        this.product.addPart("Wood Roof");
    };
    WoodBuilder.prototype.setDoors = function () {
        this.product.addPart("Wood Doors");
    };
    WoodBuilder.prototype.getHouse = function () {
        return this.product;
    };
    return WoodBuilder;
}(Builder));
var IronBuilder = /** @class */ (function (_super) {
    __extends(IronBuilder, _super);
    function IronBuilder() {
        var _this = _super.call(this) || this;
        _this.reset();
        return _this;
    }
    IronBuilder.prototype.reset = function () {
        this.product = new House;
    };
    IronBuilder.prototype.setWalls = function () {
        this.product.addPart("Iron Walls");
    };
    IronBuilder.prototype.setRoof = function () {
        this.product.addPart("Iron Roof");
    };
    IronBuilder.prototype.setDoors = function () {
        this.product.addPart("Iron Doors");
    };
    IronBuilder.prototype.getHouse = function () {
        return this.product;
    };
    return IronBuilder;
}(Builder));
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildWoodHouse = function () {
        this.builder.setWalls();
        this.builder.setRoof();
        this.builder.setDoors();
        return this.builder.getHouse();
    };
    Director.prototype.buildIronHouse = function () {
        this.builder.setWalls();
        this.builder.setRoof();
        this.builder.setDoors();
        return this.builder.getHouse();
    };
    return Director;
}());
//-----------Start-----------
//Create director and builders
var director = new Director();
var ironBuilder = new IronBuilder();
var woodBuilder = new WoodBuilder();
//Make wood house
director.setBuilder(woodBuilder);
var woodHouse = director.buildWoodHouse();
woodHouse.showParts();
//Make iron house
director.setBuilder(ironBuilder);
var ironHouse = director.buildIronHouse();
ironHouse.showParts();
