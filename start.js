var forever = require('forever-monitor');

var child = new forever.Monitor('index.js', {
  max: 20,
  silent: false,
  options: []
});

child.on('exit', function () {
  console.log('>>>>>>>>> Daemon has exited after 20 restarts <<<<<<<<<<');
});

child.start();


var child2 = new forever.Monitor('F:\\Programare\\Node.JS\\derby-0.6\\tests\\logs\\index.js', {
  max: 1,
  silent: false,
  options: []
});

child2.on('exit', function () {
  console.log('>>>>>>>>>>>>>>>>>> Log generator has exited <<<<<<<<<<<<<<<<<<');
});

child2.start();