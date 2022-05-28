"use strict";

var _require = require('python-shell'),
    PythonShell = _require.PythonShell;

PythonShell.runString('AudioToText.py', null, function (err) {
  console.log('finished');
});