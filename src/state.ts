abstract class State {
  abstract play(): void;
  abstract stop(): void;
  abstract repeat(): void;
}

class TurnOnState extends State {
  play() {
    console.log('Player Started Playing');
  }

  stop() {
    console.log('Player Stoped Playing');
  }

  repeat() {
    console.log('Player Repeaded Song');
  }
}

class TurnOffState extends State {
  play() {
    console.log('Player is Off');
  }

  stop() {
    console.log('Player is Off');
  }

  repeat() {
    console.log('Player is Off');
  }
}

class RepeatedState extends State {
  play() {
    console.log('Player Started Playing from the start');
  }

  stop() {
    console.log('Player Stoped Playing');
  }

  repeat() {
    console.log('Song is on the start');
  }
}

class Player {
  private state: State;

  constructor() {
    this.state = new TurnOnState();
  }

  setState(state: State) {
    this.state = state;
  }

  play() {
    this.state.play();
  }

  stop() {
    this.state.stop();
  }

  repeat() {
    this.state.repeat();
  }
}

//-----------Start-----------

const player = new Player();
player.play();
player.stop();
player.repeat();
console.log('');

player.setState(new TurnOffState());
player.play();
player.stop();
player.repeat();
console.log('');

player.setState(new RepeatedState());
player.play();
player.stop();
player.repeat();
console.log('');
