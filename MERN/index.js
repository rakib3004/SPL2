let {PythonShell} = require('python-shell')

PythonShell.runString('AudioToText.py', null, function (err) {
  console.log('finished');
});