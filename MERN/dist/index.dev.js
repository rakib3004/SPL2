"use strict";

var _require = require('python-shell'),
    PythonShell = _require.PythonShell;

var videoInfo = {
  args: ["tecocKSclwc", "ToDo"]
};
PythonShell.run('AudioToText.py', videoInfo, function (err, results) {
  console.log(results);
});