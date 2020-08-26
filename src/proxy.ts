abstract class Mailer{
    abstract send(msg:string):void;
    abstract get():void;
}

class MailerService extends Mailer{
    send(msg:string){
        console.log("Message was sent: " + msg);
    }

    get(){
        console.log("Message was gotten");
    }
}

class MailerProxy extends Mailer{
    private service: MailerService;
    private isAuth: boolean = false;

    constructor(service: MailerService){
        super();
        this.service = service
    }

    changeAuth(){
        this.isAuth = !this.isAuth;
    }

    send(msg:string){
        if(this.isAuth) this.service.send(msg);
        else console.log("Not Auth");
    }

    get(){
        if(this.isAuth) this.service.get();
        else console.log("Not Auth");   
    }
}





//-------------Start-------------

const mailer = new MailerService();
const mailerProxy = new MailerProxy(mailer);

mailerProxy.send("Message 1");
mailerProxy.get();

mailerProxy.changeAuth();

mailerProxy.send("Message 2");
mailerProxy.get();