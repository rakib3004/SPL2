"use strict";

var express = require('express');

var router = express.Router();

var Video = require('../models/videos');

router.get('/videos', function (req, res, next) {
  req.send('Here is the video [Video:__video, VideoId: __video_id, VideoTitle: __video_title]');
  Video.find(function (err, videos) {
    res.json(videos);
  });
});
router.post('/video', function (req, res, next) {
  var newVideo = new Video({
    videoID: req.body.videoID,
    videoTitle: req.body.videoTitle,
    videoTopic: req.body.videoTopic
  });
});
router["delete"]('/video/:id', function (req, res, next) {});
module.exports = router;