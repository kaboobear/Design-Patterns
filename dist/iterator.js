var Iter = /** @class */ (function () {
    function Iter(collection) {
        this.index = 0;
        this.collection = collection;
    }
    Iter.prototype.next = function () {
        return this.collection[this.index++];
    };
    Iter.prototype.hasNext = function () {
        return this.index < this.collection.length;
    };
    return Iter;
}());
//--------Start---------
var arr = [
    { title: "One", price: 1 },
    { title: "Two", price: 2 },
    { title: "Three", price: 3 },
    { title: "Four", price: 4 }
];
var iterator = new Iter(arr);
while (iterator.hasNext()) {
    var elem = iterator.next();
    console.log(elem.title + " - " + elem.price + "$");
}
