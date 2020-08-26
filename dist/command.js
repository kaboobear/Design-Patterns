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
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.turnOn = function () {
        console.log("Engine was turned On");
    };
    Engine.prototype.turnOff = function () {
        console.log("Engine was turned Off");
    };
    return Engine;
}());
var Command = /** @class */ (function () {
    function Command(engine) {
        this.engine = engine;
    }
    Command.prototype.getEngine = function () {
        return this.engine;
    };
    return Command;
}());
var CommandOn = /** @class */ (function (_super) {
    __extends(CommandOn, _super);
    function CommandOn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandOn.prototype.execute = function () {
        this.getEngine().turnOn();
    };
    return CommandOn;
}(Command));
var CommandOff = /** @class */ (function (_super) {
    __extends(CommandOff, _super);
    function CommandOff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandOff.prototype.execute = function () {
        this.getEngine().turnOff();
    };
    return CommandOff;
}(Command));
var Driver = /** @class */ (function () {
    function Driver(command) {
        this.command = command;
    }
    Driver.prototype.execute = function () {
        this.command.execute();
    };
    Driver.prototype.setCommand = function (command) {
        this.command = command;
    };
    return Driver;
}());
//-------Start-------
var engine = new Engine();
var commandOn = new CommandOn(engine);
var commandOff = new CommandOff(engine);
var driver = new Driver(commandOn);
driver.execute();
driver.setCommand(commandOff);
driver.execute();
