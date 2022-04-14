var express = require('express');

const router = express.Router();

router.get('/videos', (req, res, next)=>{

    req.send('Here is the video [Video:__video, VideoId: __video_id, VideoTitle: __video_title]');
});

module.exports=router;