abstract class Enemy {
  private title: string;
  private damage: number;

  setTitle(title: string): void {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

  setDamage(damage: number): void {
    this.damage = damage;
  }

  getDamage(): number {
    return this.damage;
  }

  attack(): void {
    console.log(`${this.getTitle()} attacked you`);
  }
}

class Archer extends Enemy {
  constructor() {
    super();
    this.setTitle('Archer');
    this.setDamage(5);
  }
}

class Knight extends Enemy {
  constructor() {
    super();
    this.setTitle('Knight');
    this.setDamage(10);
  }
}

class Cavalry extends Enemy {
  constructor() {
    super();
    this.setTitle('Cavalry');
    this.setDamage(15);
  }
}

class EnemyFactory {
  makeEnemy(type: string): Enemy {
    if (type === 'a') return new Archer();
    else if (type === 'k') return new Knight();
    else if (type === 'c') return new Cavalry();
    else return null;
  }
}

//------------Start-----------

const enemyFactory = new EnemyFactory();

//Archer Attack
enemyFactory.makeEnemy('a').attack();
//Knight Attack
enemyFactory.makeEnemy('k').attack();
//Cavalry Attack
enemyFactory.makeEnemy('c').attack();
