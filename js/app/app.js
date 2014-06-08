$(() => {
  new Message('hello world').deliver();
  new Cat('sebastian').meow();

  $.getJSON('https://api.github.com/repos/somlor/kanban/commits', (data) => {
    $('#main').append('<p>latest sha: ' + data[0].sha + '</p>')
  });
});
