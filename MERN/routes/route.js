var express = require('express');

const router = express.Router();
const Video = require('../models/videos')


router.get('/videos', (req, res, next)=>{

    req.send('Here is the video [Video:__video, VideoId: __video_id, VideoTitle: __video_title]');

    Video.find(function(err,videos){
        res.json(videos);
    })
});




router.post('/video', (req, res, next)=>{

let newVideo = new Video(
    {
        videoID:req.body.videoID,

        videoTitle:req.body.videoTitle,

        videoTopic:req.body.videoTopic,
    }
)

});

router.delete('/video/:id', (req, res, next)=>{

});


module.exports=router;