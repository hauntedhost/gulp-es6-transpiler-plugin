class Message {
  constructor(message) {
    this.message = message;
  }

  deliver() {
    $('#main').html(this.message);
  }
};
