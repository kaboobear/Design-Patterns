class EditorMemento {
  text: string;
  count: number;
  isTrue: boolean;

  constructor(text: string, count: number, isTrue: boolean) {
    this.text = text;
    this.count = count;
    this.isTrue = isTrue;
  }
}

class Caretaker {
  private mementos: Array<EditorMemento> = [];

  addMemento(memento: EditorMemento) {
    this.mementos.push(memento);
  }

  getMemento() {
    if (this.mementos.length === 0) {
      console.log('Mementos array is empty');
      return;
    }
    return this.mementos.pop();
  }

  showMementos() {
    if (this.mementos.length === 0) {
      console.log('No mementos yet');
      return;
    }
    this.mementos.map((elem, ind) => {
      console.log(
        ind + '. ' + elem.text + ', ' + elem.count + ', ' + elem.isTrue,
      );
    });
  }
}

class Editor {
  private text: string = 'First Text';
  private count: number = 22;
  private isTrue: boolean = true;
  private caretaker: Caretaker = new Caretaker();

  createMemento() {
    this.caretaker.addMemento(
      new EditorMemento(this.text, this.count, this.isTrue),
    );
  }

  restore() {
    const lastMemento = this.caretaker.getMemento();
    if (!lastMemento) return;

    this.text = lastMemento.text;
    this.count = lastMemento.count;
    this.isTrue = lastMemento.isTrue;
  }

  setText(text: string) {
    this.createMemento();
    this.text = text;
  }

  setCount(count: number) {
    this.createMemento();
    this.count = count;
  }

  setIsTrue(isTrue: boolean) {
    this.createMemento();
    this.isTrue = isTrue;
  }

  showStates() {
    this.caretaker.showMementos();
  }

  showEditorState() {
    console.log(this.text + ', ' + this.count + ', ' + this.isTrue);
  }
}

//-------------Start-------------

const editor = new Editor();
editor.showEditorState();
editor.showStates();
console.log('');

editor.setCount(5);
editor.setText('Second Text');
editor.showEditorState();
editor.showStates();
console.log('');

editor.restore();
editor.showEditorState();
editor.showStates();
console.log('');

editor.restore();
editor.showEditorState();
editor.showStates();
console.log('');

editor.restore();
