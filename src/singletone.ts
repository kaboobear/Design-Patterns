class Singletone {
  private static instance: Singletone;
  private dbConnections: number = 0;
  private dbName: string;

  private constructor(dbName: string) {
    console.log('Database ' + dbName + ' was created');
    this.dbName = dbName;
  }

  static getInstance(dbName = '') {
    if (!this.instance) {
      if (!dbName) dbName = 'Default';
      this.instance = new Singletone(dbName);
    }
    return this.instance;
  }

  connectToDb() {
    this.dbConnections++;
  }

  getName(): string {
    return this.dbName;
  }

  getConnections(): number {
    return this.dbConnections;
  }

  changeDbName(dbName: string) {
    this.dbName = dbName;
  }
}

//Admin creates Database
const adminDb = Singletone.getInstance('Database');
console.log(adminDb.getName());
console.log(adminDb.getConnections());

//User1 conecting to Database
const User1 = Singletone.getInstance();
User1.connectToDb();
console.log(User1.getName());
console.log(User1.getConnections());
User1.changeDbName('Changed Name');

//User2 conecting to Database
const User2 = Singletone.getInstance();
User2.connectToDb();
console.log(User2.getName());
console.log(User2.getConnections());
