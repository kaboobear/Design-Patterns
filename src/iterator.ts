class Iter {
  private collection: Array<any>;
  private index: number = 0;

  constructor(collection: Array<any>) {
    this.collection = collection;
  }

  next(): any {
    return this.collection[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

//--------Start---------

const arr = [
  { title: 'One', price: 1 },
  { title: 'Two', price: 2 },
  { title: 'Three', price: 3 },
  { title: 'Four', price: 4 },
];

const iterator = new Iter(arr);
while (iterator.hasNext()) {
  const elem = iterator.next();
  console.log(elem.title + ' - ' + elem.price + '$');
}
