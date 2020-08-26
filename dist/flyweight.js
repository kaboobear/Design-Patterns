var FlyweightEnemy = /** @class */ (function () {
    function FlyweightEnemy(texture, color) {
        this.texture = texture;
        this.color = color;
    }
    FlyweightEnemy.prototype.getTexture = function () {
        return this.texture;
    };
    FlyweightEnemy.prototype.getColor = function () {
        return this.color;
    };
    return FlyweightEnemy;
}());
var FlyweightEnemyFactory = /** @class */ (function () {
    function FlyweightEnemyFactory() {
        this.flyweightsArray = [];
    }
    FlyweightEnemyFactory.prototype.getFlyweight = function (texture, color) {
        var flyweightElem;
        this.flyweightsArray.forEach(function (elem) {
            if (elem.getColor() === color && elem.getTexture() === texture)
                flyweightElem = elem;
        });
        if (flyweightElem)
            return flyweightElem;
        flyweightElem = new FlyweightEnemy(texture, color);
        this.flyweightsArray.push(flyweightElem);
        return flyweightElem;
    };
    FlyweightEnemyFactory.prototype.showFlyweightsElements = function () {
        console.log("Flyweghts:");
        this.flyweightsArray.map(function (elem, ind) {
            console.log(ind + 1 + ". " + elem.getTexture() + ", " + elem.getColor());
        });
        console.log("\n");
    };
    return FlyweightEnemyFactory;
}());
var EnemyItem = /** @class */ (function () {
    function EnemyItem(title, power, flyweight) {
        this.title = title;
        this.power = power;
        this.flyweight = flyweight;
    }
    EnemyItem.prototype.showEnemy = function () {
        console.log(this.title + ", " + this.power + ", " + this.flyweight.getTexture() + ", " + this.flyweight.getColor() + " \n");
    };
    return EnemyItem;
}());
//-------------Start------------
var factory = new FlyweightEnemyFactory();
var enemy1 = new EnemyItem("Goblin", 5, factory.getFlyweight("Skin", "Green"));
enemy1.showEnemy();
factory.showFlyweightsElements();
var enemy2 = new EnemyItem("Knight", 10, factory.getFlyweight("Iron", "Grey"));
enemy2.showEnemy();
factory.showFlyweightsElements();
var enemy3 = new EnemyItem("Ogr", 25, factory.getFlyweight("Skin", "Green"));
enemy3.showEnemy();
factory.showFlyweightsElements();
