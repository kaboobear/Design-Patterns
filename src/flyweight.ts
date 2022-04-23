class FlyweightEnemy {
  private texture: string;
  private color: string;
  constructor(texture: string, color: string) {
    this.texture = texture;
    this.color = color;
  }

  getTexture(): string {
    return this.texture;
  }

  getColor(): string {
    return this.color;
  }
}

class FlyweightEnemyFactory {
  private flyweightsArray: Array<FlyweightEnemy> = [];

  getFlyweight(texture: string, color: string): FlyweightEnemy {
    let flyweightElem;
    this.flyweightsArray.forEach((elem) => {
      if (elem.getColor() === color && elem.getTexture() === texture)
        flyweightElem = elem;
    });
    if (flyweightElem) return flyweightElem;
    flyweightElem = new FlyweightEnemy(texture, color);
    this.flyweightsArray.push(flyweightElem);
    return flyweightElem;
  }

  showFlyweightsElements() {
    console.log('Flyweghts:');
    this.flyweightsArray.map((elem, ind) => {
      console.log(ind + 1 + '. ' + elem.getTexture() + ', ' + elem.getColor());
    });
    console.log('\n');
  }
}

class EnemyItem {
  private title: string;
  private power: number;
  private flyweight: FlyweightEnemy;

  constructor(title: string, power: number, flyweight: FlyweightEnemy) {
    this.title = title;
    this.power = power;
    this.flyweight = flyweight;
  }

  showEnemy() {
    console.log(
      `${this.title}, ${
        this.power
      }, ${this.flyweight.getTexture()}, ${this.flyweight.getColor()} \n`,
    );
  }
}

//-------------Start------------
const factory = new FlyweightEnemyFactory();

const enemy1 = new EnemyItem(
  'Goblin',
  5,
  factory.getFlyweight('Skin', 'Green'),
);
enemy1.showEnemy();
factory.showFlyweightsElements();

const enemy2 = new EnemyItem(
  'Knight',
  10,
  factory.getFlyweight('Iron', 'Grey'),
);
enemy2.showEnemy();
factory.showFlyweightsElements();

const enemy3 = new EnemyItem('Ogr', 25, factory.getFlyweight('Skin', 'Green'));
enemy3.showEnemy();
factory.showFlyweightsElements();
