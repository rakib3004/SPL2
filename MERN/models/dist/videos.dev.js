"use strict";

var mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
  videoID: {
    type: String,
    required: true
  },
  videoTitle: {
    type: String,
    required: true
  },
  videoTopic: {
    type: String,
    required: true
  }
});
var Video = module.exports = mongoose.model('Video', videoSchema);