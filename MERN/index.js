let {PythonShell} = require('python-shell')

let videoInfo={
  args:["tecocKSclwc","ToDo"]
}

PythonShell.run('AudioToText.py', videoInfo, function(err,results) {
  console.log(results);
});