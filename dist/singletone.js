var Singletone = /** @class */ (function () {
    function Singletone(dbName) {
        this.dbConnections = 0;
        console.log("Database " + dbName + " was created");
        this.dbName = dbName;
    }
    Singletone.getInstance = function (dbName) {
        if (dbName === void 0) { dbName = ""; }
        if (!this.instance) {
            if (!dbName)
                dbName = "Default";
            this.instance = new Singletone(dbName);
        }
        return this.instance;
    };
    Singletone.prototype.connectToDb = function () {
        this.dbConnections++;
    };
    Singletone.prototype.getName = function () {
        return this.dbName;
    };
    Singletone.prototype.getConnections = function () {
        return this.dbConnections;
    };
    Singletone.prototype.changeDbName = function (dbName) {
        this.dbName = dbName;
    };
    return Singletone;
}());
//Admin creates Database
var adminDb = Singletone.getInstance("Database");
console.log(adminDb.getName());
console.log(adminDb.getConnections());
//User1 conecting to Database
var User1 = Singletone.getInstance();
User1.connectToDb();
console.log(User1.getName());
console.log(User1.getConnections());
User1.changeDbName("Changed Name");
//User2 conecting to Database
var User2 = Singletone.getInstance();
User2.connectToDb();
console.log(User2.getName());
console.log(User2.getConnections());
