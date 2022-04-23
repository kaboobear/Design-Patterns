abstract class Visitor {
  abstract orcBorn(): void;
  abstract humanBorn(): void;
  abstract elfBorn(): void;
}

abstract class Race {
  attack(): void {
    console.log('Attack');
  }

  build(): void {
    console.log('Build');
  }

  collect(): void {
    console.log('Collect');
  }

  abstract accept(visitor: Visitor): void;
}

class Orcs extends Race {
  accept(visitor: Visitor) {
    visitor.orcBorn();
  }
}

class Humans extends Race {
  accept(visitor: Visitor) {
    visitor.humanBorn();
  }
}

class Elfs extends Race {
  accept(visitor: Visitor) {
    visitor.elfBorn();
  }
}

class WarriorVisitor {
  orcBorn() {
    console.log('Ogr was born');
  }
  humanBorn(): void {
    console.log('Knight was born');
  }
  elfBorn(): void {
    console.log('Archer was born');
  }
}

class BossVisitor {
  orcBorn() {
    console.log('Dragon was born');
  }
  humanBorn(): void {
    console.log('Elemental was born');
  }
  elfBorn(): void {
    console.log('Tree was born');
  }
}

//----------Start----------

const units: Array<Race> = [new Orcs(), new Orcs(), new Humans(), new Elfs()];
const warrior = new WarriorVisitor();
const boss = new BossVisitor();

units.map((elem) => {
  elem.accept(warrior);
});

console.log('');

units.map((elem) => {
  elem.accept(boss);
});
