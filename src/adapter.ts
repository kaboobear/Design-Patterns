class Car {
  startEngine(engine: Engine1) {
    engine.startPipe1();
  }
}

class Engine1 {
  startPipe1() {
    console.log('Engine 1 Started');
  }
}

class Engine2 {
  startPipe2() {
    console.log('Engine 2 Started');
  }
}

class Engine2Adapter extends Engine1 {
  private engine: Engine2;

  constructor(engine: Engine2) {
    super();
    this.engine = engine;
  }

  startPipe1() {
    this.engine.startPipe2();
  }
}

//------------Start----------

const Mazda = new Car();

const EngineOne = new Engine1();
const EngineTwo = new Engine2();

Mazda.startEngine(EngineOne);
// Mazda.startEngine(EngineTwo);          Error
Mazda.startEngine(new Engine2Adapter(EngineTwo));
