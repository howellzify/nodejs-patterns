// MyFancyObservable.js
var util = require('util');  
var EventEmitter = require('events').EventEmitter;

function MyFancyObservable() {  
  EventEmitter.call(this);
}

util.inherits(MyFancyObservable, EventEmitter);  

MyFancyObservable.prototype.hello = function (name) {  
  this.emit('hello', name);
};

//next line is not in the regular example - tracking down this exact usage to expose the constructor
module.exports = MyFancyObservable; 