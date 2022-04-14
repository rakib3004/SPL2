const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({

        videoID:{
            type: String,
            required: true
        },

        videoTitle:{
            type: String,
            required: true
        },

        videoTopic:{
            type: String,
            required: true
        },



});

const Video = module.exports = mongoose.model('Video',videoSchema);

