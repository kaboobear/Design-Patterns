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
var Enemy = /** @class */ (function () {
    function Enemy() {
    }
    Enemy.prototype.setTitle = function (title) {
        this.title = title;
    };
    Enemy.prototype.getTitle = function () {
        return this.title;
    };
    Enemy.prototype.setDamage = function (damage) {
        this.damage = damage;
    };
    Enemy.prototype.getDamage = function () {
        return this.damage;
    };
    Enemy.prototype.attack = function () {
        console.log(this.getTitle() + " attacked you");
    };
    return Enemy;
}());
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        var _this = _super.call(this) || this;
        _this.setTitle("Archer");
        _this.setDamage(5);
        return _this;
    }
    return Archer;
}(Enemy));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super.call(this) || this;
        _this.setTitle("Knight");
        _this.setDamage(10);
        return _this;
    }
    return Knight;
}(Enemy));
var Cavalry = /** @class */ (function (_super) {
    __extends(Cavalry, _super);
    function Cavalry() {
        var _this = _super.call(this) || this;
        _this.setTitle("Cavalry");
        _this.setDamage(15);
        return _this;
    }
    return Cavalry;
}(Enemy));
var EnemyFactory = /** @class */ (function () {
    function EnemyFactory() {
    }
    EnemyFactory.prototype.makeEnemy = function (type) {
        if (type === "a")
            return new Archer();
        else if (type === "k")
            return new Knight();
        else if (type === "c")
            return new Cavalry();
        else
            return null;
    };
    return EnemyFactory;
}());
//------------Start-----------
var enemyFactory = new EnemyFactory();
//Archer Attack
enemyFactory.makeEnemy('a').attack();
//Knight Attack
enemyFactory.makeEnemy('k').attack();
//Cavalry Attack
enemyFactory.makeEnemy('c').attack();
