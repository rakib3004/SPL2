var express = require('express');

const router = express.Router();
const Video = require('../models/videos')


router.get('/videos', (req, res, next)=>{

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
);

newVideo.save((err,video)=>{

    if(err){

        res.json({msg: 'Failed to add contact'});

    }
    else{
        res.json({msg: 'Successfully add contact'});

    }
});

});

router.delete('/video/:id', (req, res, next)=>{
    Video.remove({_id:req.params.id}, function(err,result){
        if(err){

            res.json(err);
    
        }
        else{
            res.json(result);
    
        }
    })

});


module.exports=router;