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