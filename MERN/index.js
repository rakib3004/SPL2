let {PythonShell} = require('python-shell')

let videoInfo={
  args:["tecocKSclwc"]
}

PythonShell.run('AudioToText.py', videoInfo, function(err,results) {
  console.log(results);
});