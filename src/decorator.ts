abstract class sender {
  abstract send(msg: string): void;
  abstract get(): void;
}

class MailSender extends sender {
  send(msg: string) {
    console.log('Mail was sent: ' + msg);
  }

  get() {
    console.log('Message was got');
  }
}

class SenderDecorator extends sender {
  private wrapped: MailSender;

  constructor(source: MailSender) {
    super();
    this.wrapped = source;
  }

  send(msg: string) {
    this.wrapped.send(msg);
  }

  get() {
    this.wrapped.get();
  }
}

class TwitterSenderDecorator extends SenderDecorator {
  send(msg: string) {
    console.log('Mail was sent from Twitter: ' + msg);
  }
}

class InstagramSenderDecorator extends SenderDecorator {
  send(msg: string) {
    console.log('Mail was sent from Instagram: ' + msg);
  }

  makePost() {
    console.log('Post was created');
  }
}

//-----------Start----------
let mailSender = new MailSender();
mailSender.send('Message One');
mailSender.get();

mailSender = new TwitterSenderDecorator(mailSender);
mailSender.send('Message Two');
mailSender.get();

mailSender = new InstagramSenderDecorator(mailSender);
mailSender.send('Message Three');
mailSender.get();
