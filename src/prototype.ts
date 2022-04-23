abstract class Instrument {
  private name: string;
  private type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }

  abstract showInstrument(): void;
  abstract clone(): Instrument;
}

class Drums extends Instrument {
  private count: number = 4;

  constructor(name: string, type: string, count: number) {
    super(name, type);
    this.count = count;
  }

  getCount(): number {
    return this.count;
  }

  setCount(count: number) {
    this.count = count;
  }

  showInstrument() {
    console.log(`
Name: ${this.getName()}
Type: ${this.getType()}
Count: ${this.getCount()}
        `);
  }

  clone(): Drums {
    return new Drums(this.getName(), this.getType(), this.getCount());
  }
}

class Guitar extends Instrument {
  private strings: number = 6;

  constructor(name: string, type: string, strings: number) {
    super(name, type);
    this.strings = strings;
  }

  getStrings(): number {
    return this.strings;
  }

  setStrings(strings: number) {
    this.strings = strings;
  }

  showInstrument() {
    console.log(`
Name: ${this.getName()}
Type: ${this.getType()}
Count: ${this.getStrings()}
        `);
  }

  clone(): Guitar {
    return new Guitar(this.getName(), this.getType(), this.getStrings());
  }
}

//-----------Start----------

//Make instrument and change strings count
const g1: Guitar = new Guitar('Guitar1', 'Guitar', 6);
g1.showInstrument();
g1.setStrings(8);

//Make clone and show
const g1c: Guitar = g1.clone();
g1c.showInstrument();
