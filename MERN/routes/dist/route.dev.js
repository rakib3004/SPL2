"use strict";

var express = require('express');

var router = express.Router();
router.get('/videos', function (req, res, next) {
  req.send('Here is the video [Video:__video, VideoId: __video_id, VideoTitle: __video_title]');
});
router.post('/video', function (req, res, next) {});
router["delete"]('/video/:id', function (req, res, next) {});
module.exports = router;