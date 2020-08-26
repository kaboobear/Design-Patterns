var Observer = /** @class */ (function () {
    function Observer(name) {
        this.name = name;
    }
    Observer.prototype.getName = function () {
        return this.name;
    };
    Observer.prototype.notify = function (text) {
        console.log(this.name + " was notified with message: " + text);
    };
    return Observer;
}());
var Site = /** @class */ (function () {
    function Site() {
        this.text = "Default";
        this.subscribers = [];
    }
    Site.prototype.setText = function (text) {
        this.text = text;
    };
    Site.prototype.notifyAll = function () {
        var _this = this;
        if (this.subscribers.length == 0) {
            console.log("There're no subscribers yet");
            return;
        }
        this.subscribers.map(function (elem) {
            elem.notify(_this.text);
        });
    };
    Site.prototype.subscribe = function (sub) {
        this.subscribers.push(sub);
    };
    Site.prototype.unsubscribe = function (sub) {
        this.subscribers = this.subscribers.filter(function (elem) { return (elem !== sub); });
    };
    return Site;
}());
//----------Start----------
var site = new Site();
site.setText("First Message");
var sub1 = new Observer("Max");
var sub2 = new Observer("Jack");
var sub3 = new Observer("Polli");
site.notifyAll();
console.log("");
site.subscribe(sub1);
site.notifyAll();
console.log("");
site.subscribe(sub2);
site.subscribe(sub3);
site.unsubscribe(sub1);
site.notifyAll();
console.log("");
site.subscribe(sub1);
site.notifyAll();
