"use strict";

var express = require('express');

var router = express.Router();

var Video = require('../models/videos');

router.get('/videos', function (req, res, next) {
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
  newVideo.save(function (err, video) {
    if (err) {
      res.json({
        msg: 'Failed to add contact'
      });
    } else {
      res.json({
        msg: 'Successfully add contact'
      });
    }
  });
});
router["delete"]('/video/:id', function (req, res, next) {
  Video.remove({
    _id: req.params.id
  }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;