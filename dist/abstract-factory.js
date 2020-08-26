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
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.setTitle = function (title) {
        this.title = title;
    };
    Button.prototype.getTitle = function () {
        return this.title;
    };
    Button.prototype.click = function () {
        console.log(this.getTitle() + " button was clicked");
    };
    return Button;
}());
var Popup = /** @class */ (function () {
    function Popup() {
    }
    Popup.prototype.setTitle = function (title) {
        this.title = title;
    };
    Popup.prototype.getTitle = function () {
        return this.title;
    };
    Popup.prototype.close = function () {
        console.log(this.getTitle() + " popup was closed");
    };
    return Popup;
}());
var WinPopup = /** @class */ (function (_super) {
    __extends(WinPopup, _super);
    function WinPopup() {
        var _this = _super.call(this) || this;
        _this.setTitle("WinPop");
        return _this;
    }
    return WinPopup;
}(Popup));
var MacPopup = /** @class */ (function (_super) {
    __extends(MacPopup, _super);
    function MacPopup() {
        var _this = _super.call(this) || this;
        _this.setTitle("MacPop");
        return _this;
    }
    return MacPopup;
}(Popup));
var WinButton = /** @class */ (function (_super) {
    __extends(WinButton, _super);
    function WinButton() {
        var _this = _super.call(this) || this;
        _this.setTitle("WinBtn");
        return _this;
    }
    return WinButton;
}(Button));
var MacButton = /** @class */ (function (_super) {
    __extends(MacButton, _super);
    function MacButton() {
        var _this = _super.call(this) || this;
        _this.setTitle("MacBtn");
        return _this;
    }
    return MacButton;
}(Button));
var Factory = /** @class */ (function () {
    function Factory() {
    }
    return Factory;
}());
var WinFactory = /** @class */ (function (_super) {
    __extends(WinFactory, _super);
    function WinFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinFactory.prototype.makeButton = function () {
        return new WinButton;
    };
    WinFactory.prototype.makePopup = function () {
        return new WinPopup;
    };
    return WinFactory;
}(Factory));
var MacFactory = /** @class */ (function (_super) {
    __extends(MacFactory, _super);
    function MacFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MacFactory.prototype.makeButton = function () {
        return new MacButton;
    };
    MacFactory.prototype.makePopup = function () {
        return new MacPopup;
    };
    return MacFactory;
}(Factory));
//------------Start-----------
var macFactory = new MacFactory();
var winFactory = new WinFactory();
//Mac Test
macFactory.makeButton().click();
macFactory.makePopup().close();
//Win Test
winFactory.makeButton().click();
winFactory.makePopup().close();
