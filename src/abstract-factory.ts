abstract class Button {
    private title: string;

    setTitle(title:string):void {
        this.title = title;
    }

    getTitle():string{
        return this.title;
    }

    click():void{
        console.log(`${this.getTitle()} button was clicked`);
    }
}

abstract class Popup {
    private title: string;

    setTitle(title:string):void {
        this.title = title;
    }

    getTitle():string{
        return this.title;
    }

    close():void{
        console.log(`${this.getTitle()} popup was closed`);
    }
}

class WinPopup extends Popup{
    constructor(){
        super();
        this.setTitle("WinPop");
    }
}

class MacPopup extends Popup{
    constructor(){
        super();
        this.setTitle("MacPop");
    }
}

class WinButton extends Button{
    constructor(){
        super();
        this.setTitle("WinBtn");
    }
}

class MacButton extends Button{
    constructor(){
        super();
        this.setTitle("MacBtn");
    }
}

abstract class Factory{
    abstract makeButton(): Button;
    abstract makePopup(): Popup;
}

class WinFactory extends Factory{
    makeButton(): Button{
        return new WinButton;
    }
    makePopup(): Popup{
        return new WinPopup;
    }
}

class MacFactory extends Factory{
    makeButton(): Button{
        return new MacButton;
    }
    makePopup(): Popup{
        return new MacPopup;
    }
}




//------------Start-----------

const macFactory:MacFactory = new MacFactory();
const winFactory:WinFactory = new WinFactory();

//Mac Test
macFactory.makeButton().click();
macFactory.makePopup().close();

//Win Test
winFactory.makeButton().click();
winFactory.makePopup().close();
