abstract class Color {
  private colorName: string;

  constructor(colorName: string) {
    this.colorName = colorName;
  }

  getColor(): string {
    return this.colorName;
  }
}

class BlueColor extends Color {
  constructor() {
    super('Blue');
  }
}

class RedColor extends Color {
  constructor() {
    super('Red');
  }
}

abstract class Auto {
  private model: string;
  private color: Color;

  constructor(color: Color, model: string) {
    this.color = color;
    this.model = model;
  }

  showAuto(): void {
    console.log(`Model: ${this.model} \nColor: ${this.color.getColor()} \n`);
  }
}

class Audi extends Auto {
  constructor(color: Color) {
    super(color, 'Audi');
  }
}

class Honda extends Auto {
  constructor(color: Color) {
    super(color, 'Mazda');
  }
}

//------------Start-----------
const myBlueHonda = new Honda(new BlueColor());
myBlueHonda.showAuto();

const myRedAudi = new Audi(new RedColor());
myRedAudi.showAuto();
