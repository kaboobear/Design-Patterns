class Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  notify(text: string): void {
    console.log(this.name + ' was notified with message: ' + text);
  }
}

class Site {
  private text: string = 'Default';
  private subscribers: Array<Observer> = [];

  setText(text: string) {
    this.text = text;
  }

  notifyAll() {
    if (this.subscribers.length == 0) {
      console.log("There're no subscribers yet");
      return;
    }

    this.subscribers.map((elem) => {
      elem.notify(this.text);
    });
  }

  subscribe(sub: Observer) {
    this.subscribers.push(sub);
  }

  unsubscribe(sub: Observer) {
    this.subscribers = this.subscribers.filter((elem) => elem !== sub);
  }
}

//----------Start----------

const site = new Site();
site.setText('First Message');

const sub1 = new Observer('Max');
const sub2 = new Observer('Jack');
const sub3 = new Observer('Polli');

site.notifyAll();
console.log('');

site.subscribe(sub1);
site.notifyAll();
console.log('');

site.subscribe(sub2);
site.subscribe(sub3);
site.unsubscribe(sub1);
site.notifyAll();
console.log('');

site.subscribe(sub1);
site.notifyAll();
