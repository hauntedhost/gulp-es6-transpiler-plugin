var Animal = (function(){
  function Animal(name) {
    this.name = name;
  }
;return Animal;})();;

$(function()  {
  new Message('hello world').deliver();
  new Cat('sebastian').meow();

  $.getJSON('https://api.github.com/repos/somlor/kanban/commits', function(data)  {
    $('#main').append('<p>latest sha: ' + data[0].sha + '</p>')
  });
});

var Cat = (function(super$0){var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){Object.defineProperty(t,p,Object.getOwnPropertyDescriptor(s,p));}}return t};MIXIN$0(Cat, super$0);
  function Cat(name) {
    super$0.call(this, name);
  }Cat.prototype = Object.create(super$0.prototype, {"constructor": {"value": Cat, "configurable": true, "writable": true} });

  Cat.prototype.meow = function() {
    $('#main').append('<p>meooow</p>');
  }
;return Cat;})(Animal);;

var Message = (function(){
  function Message(message) {
    this.message = message;
  }

  Message.prototype.deliver = function() {
    $('#main').html(this.message);
  }
;return Message;})();;
