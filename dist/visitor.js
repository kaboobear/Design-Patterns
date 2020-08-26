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
var Visitor = /** @class */ (function () {
    function Visitor() {
    }
    return Visitor;
}());
var Race = /** @class */ (function () {
    function Race() {
    }
    Race.prototype.attack = function () {
        console.log("Attack");
    };
    Race.prototype.build = function () {
        console.log("Build");
    };
    Race.prototype.collect = function () {
        console.log("Collect");
    };
    return Race;
}());
var Orcs = /** @class */ (function (_super) {
    __extends(Orcs, _super);
    function Orcs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Orcs.prototype.accept = function (visitor) {
        visitor.orcBorn();
    };
    return Orcs;
}(Race));
var Humans = /** @class */ (function (_super) {
    __extends(Humans, _super);
    function Humans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Humans.prototype.accept = function (visitor) {
        visitor.humanBorn();
    };
    return Humans;
}(Race));
var Elfs = /** @class */ (function (_super) {
    __extends(Elfs, _super);
    function Elfs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Elfs.prototype.accept = function (visitor) {
        visitor.elfBorn();
    };
    return Elfs;
}(Race));
var WarriorVisitor = /** @class */ (function () {
    function WarriorVisitor() {
    }
    WarriorVisitor.prototype.orcBorn = function () {
        console.log("Ogr was born");
    };
    ;
    WarriorVisitor.prototype.humanBorn = function () {
        console.log("Knight was born");
    };
    WarriorVisitor.prototype.elfBorn = function () {
        console.log("Archer was born");
    };
    return WarriorVisitor;
}());
var BossVisitor = /** @class */ (function () {
    function BossVisitor() {
    }
    BossVisitor.prototype.orcBorn = function () {
        console.log("Dragon was born");
    };
    ;
    BossVisitor.prototype.humanBorn = function () {
        console.log("Elemental was born");
    };
    BossVisitor.prototype.elfBorn = function () {
        console.log("Tree was born");
    };
    return BossVisitor;
}());
//----------Start----------
var units = [new Orcs(), new Orcs(), new Humans(), new Elfs()];
var warrior = new WarriorVisitor();
var boss = new BossVisitor();
units.map(function (elem) {
    elem.accept(warrior);
});
console.log("");
units.map(function (elem) {
    elem.accept(boss);
});
