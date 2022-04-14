var express = require('express');

const router = express.Router();

router.get('/videos', (req, res, next)=>{

    req.send('Here is the video [Video:__video, VideoId: __video_id, VideoTitle: __video_title]');
});

router.post('/video', (req, res, next)=>{

});

router.delete('/video/:id', (req, res, next)=>{

});


module.exports=router;