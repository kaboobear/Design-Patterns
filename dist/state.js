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
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());
var TurnOnState = /** @class */ (function (_super) {
    __extends(TurnOnState, _super);
    function TurnOnState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TurnOnState.prototype.play = function () {
        console.log("Player Started Playing");
    };
    TurnOnState.prototype.stop = function () {
        console.log("Player Stoped Playing");
    };
    TurnOnState.prototype.repeat = function () {
        console.log("Player Repeaded Song");
    };
    return TurnOnState;
}(State));
var TurnOffState = /** @class */ (function (_super) {
    __extends(TurnOffState, _super);
    function TurnOffState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TurnOffState.prototype.play = function () {
        console.log("Player is Off");
    };
    TurnOffState.prototype.stop = function () {
        console.log("Player is Off");
    };
    TurnOffState.prototype.repeat = function () {
        console.log("Player is Off");
    };
    return TurnOffState;
}(State));
var RepeatedState = /** @class */ (function (_super) {
    __extends(RepeatedState, _super);
    function RepeatedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepeatedState.prototype.play = function () {
        console.log("Player Started Playing from the start");
    };
    RepeatedState.prototype.stop = function () {
        console.log("Player Stoped Playing");
    };
    RepeatedState.prototype.repeat = function () {
        console.log("Song is on the start");
    };
    return RepeatedState;
}(State));
var Player = /** @class */ (function () {
    function Player() {
        this.state = new TurnOnState();
    }
    Player.prototype.setState = function (state) {
        this.state = state;
    };
    Player.prototype.play = function () {
        this.state.play();
    };
    Player.prototype.stop = function () {
        this.state.stop();
    };
    Player.prototype.repeat = function () {
        this.state.repeat();
    };
    return Player;
}());
//-----------Start-----------
var player = new Player();
player.play();
player.stop();
player.repeat();
console.log("");
player.setState(new TurnOffState());
player.play();
player.stop();
player.repeat();
console.log("");
player.setState(new RepeatedState());
player.play();
player.stop();
player.repeat();
console.log("");
