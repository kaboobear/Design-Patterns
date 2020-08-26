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
var Color = /** @class */ (function () {
    function Color(colorName) {
        this.colorName = colorName;
    }
    Color.prototype.getColor = function () {
        return this.colorName;
    };
    return Color;
}());
var BlueColor = /** @class */ (function (_super) {
    __extends(BlueColor, _super);
    function BlueColor() {
        return _super.call(this, "Blue") || this;
    }
    return BlueColor;
}(Color));
var RedColor = /** @class */ (function (_super) {
    __extends(RedColor, _super);
    function RedColor() {
        return _super.call(this, "Red") || this;
    }
    return RedColor;
}(Color));
var Auto = /** @class */ (function () {
    function Auto(color, model) {
        this.color = color;
        this.model = model;
    }
    Auto.prototype.showAuto = function () {
        console.log("Model: " + this.model + " \nColor: " + this.color.getColor() + " \n");
    };
    return Auto;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(color) {
        return _super.call(this, color, "Audi") || this;
    }
    return Audi;
}(Auto));
var Honda = /** @class */ (function (_super) {
    __extends(Honda, _super);
    function Honda(color) {
        return _super.call(this, color, "Mazda") || this;
    }
    return Honda;
}(Auto));
//------------Start-----------
var myBlueHonda = new Honda(new BlueColor());
myBlueHonda.showAuto();
var myRedAudi = new Audi(new RedColor());
myRedAudi.showAuto();
