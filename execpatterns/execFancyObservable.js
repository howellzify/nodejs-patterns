var MyFancyObservable = require('../patterns/MyFancyObservable');  
var observable = new MyFancyObservable();

observable.on('hello', function (name) {  
  console.log(name);
});

observable.hello('john');  