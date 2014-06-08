class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  meow() {
    $('#main').append('<p>meooow</p>');
  }
};
