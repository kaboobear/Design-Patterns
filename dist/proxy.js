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
var Mailer = /** @class */ (function () {
    function Mailer() {
    }
    return Mailer;
}());
var MailerService = /** @class */ (function (_super) {
    __extends(MailerService, _super);
    function MailerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MailerService.prototype.send = function (msg) {
        console.log("Message was sent: " + msg);
    };
    MailerService.prototype.get = function () {
        console.log("Message was gotten");
    };
    return MailerService;
}(Mailer));
var MailerProxy = /** @class */ (function (_super) {
    __extends(MailerProxy, _super);
    function MailerProxy(service) {
        var _this = _super.call(this) || this;
        _this.isAuth = false;
        _this.service = service;
        return _this;
    }
    MailerProxy.prototype.changeAuth = function () {
        this.isAuth = !this.isAuth;
    };
    MailerProxy.prototype.send = function (msg) {
        if (this.isAuth)
            this.service.send(msg);
        else
            console.log("Not Auth");
    };
    MailerProxy.prototype.get = function () {
        if (this.isAuth)
            this.service.get();
        else
            console.log("Not Auth");
    };
    return MailerProxy;
}(Mailer));
//-------------Start-------------
var mailer = new MailerService();
var mailerProxy = new MailerProxy(mailer);
mailerProxy.send("Message 1");
mailerProxy.get();
mailerProxy.changeAuth();
mailerProxy.send("Message 2");
mailerProxy.get();
