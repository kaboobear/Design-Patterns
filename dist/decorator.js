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
var sender = /** @class */ (function () {
    function sender() {
    }
    return sender;
}());
var MailSender = /** @class */ (function (_super) {
    __extends(MailSender, _super);
    function MailSender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MailSender.prototype.send = function (msg) {
        console.log("Mail was sent: " + msg);
    };
    MailSender.prototype.get = function () {
        console.log("Message was got");
    };
    return MailSender;
}(sender));
var SenderDecorator = /** @class */ (function (_super) {
    __extends(SenderDecorator, _super);
    function SenderDecorator(source) {
        var _this = _super.call(this) || this;
        _this.wrapped = source;
        return _this;
    }
    SenderDecorator.prototype.send = function (msg) {
        this.wrapped.send(msg);
    };
    SenderDecorator.prototype.get = function () {
        this.wrapped.get();
    };
    return SenderDecorator;
}(sender));
var TwitterSenderDecorator = /** @class */ (function (_super) {
    __extends(TwitterSenderDecorator, _super);
    function TwitterSenderDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwitterSenderDecorator.prototype.send = function (msg) {
        console.log("Mail was sent from Twitter: " + msg);
    };
    return TwitterSenderDecorator;
}(SenderDecorator));
var InstagramSenderDecorator = /** @class */ (function (_super) {
    __extends(InstagramSenderDecorator, _super);
    function InstagramSenderDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstagramSenderDecorator.prototype.send = function (msg) {
        console.log("Mail was sent from Instagram: " + msg);
    };
    InstagramSenderDecorator.prototype.makePost = function () {
        console.log("Post was created");
    };
    return InstagramSenderDecorator;
}(SenderDecorator));
//-----------Start----------
var mailSender = new MailSender();
mailSender.send("Message One");
mailSender.get();
mailSender = new TwitterSenderDecorator(mailSender);
mailSender.send("Message Two");
mailSender.get();
mailSender = new InstagramSenderDecorator(mailSender);
mailSender.send("Message Three");
mailSender.get();
