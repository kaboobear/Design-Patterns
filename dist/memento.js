var EditorMemento = /** @class */ (function () {
    function EditorMemento(text, count, isTrue) {
        this.text = text;
        this.count = count;
        this.isTrue = isTrue;
    }
    return EditorMemento;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.mementos = [];
    }
    Caretaker.prototype.addMemento = function (memento) {
        this.mementos.push(memento);
    };
    Caretaker.prototype.getMemento = function () {
        if (this.mementos.length === 0) {
            console.log("Mementos array is empty");
            return;
        }
        return this.mementos.pop();
    };
    Caretaker.prototype.showMementos = function () {
        if (this.mementos.length === 0) {
            console.log("No mementos yet");
            return;
        }
        this.mementos.map(function (elem, ind) {
            console.log(ind + ". " + elem.text + ", " + elem.count + ", " + elem.isTrue);
        });
    };
    return Caretaker;
}());
var Editor = /** @class */ (function () {
    function Editor() {
        this.text = "First Text";
        this.count = 22;
        this.isTrue = true;
        this.caretaker = new Caretaker();
    }
    Editor.prototype.createMemento = function () {
        this.caretaker.addMemento(new EditorMemento(this.text, this.count, this.isTrue));
    };
    Editor.prototype.restore = function () {
        var lastMemento = this.caretaker.getMemento();
        if (!lastMemento)
            return;
        this.text = lastMemento.text;
        this.count = lastMemento.count;
        this.isTrue = lastMemento.isTrue;
    };
    Editor.prototype.setText = function (text) {
        this.createMemento();
        this.text = text;
    };
    Editor.prototype.setCount = function (count) {
        this.createMemento();
        this.count = count;
    };
    Editor.prototype.setIsTrue = function (isTrue) {
        this.createMemento();
        this.isTrue = isTrue;
    };
    Editor.prototype.showStates = function () {
        this.caretaker.showMementos();
    };
    Editor.prototype.showEditorState = function () {
        console.log(this.text + ", " + this.count + ", " + this.isTrue);
    };
    return Editor;
}());
//-------------Start-------------
var editor = new Editor();
editor.showEditorState();
editor.showStates();
console.log('');
editor.setCount(5);
editor.setText("Second Text");
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
