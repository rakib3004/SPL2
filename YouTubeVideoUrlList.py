import random
youTubeVideoUrlListPlainText = open("YouTubePlayList.txt", encoding="utf8")

youTubeVideoUrlListFile=youTubeVideoUrlListPlainText.readlines()


youTubeVideoUrlListVideoTopic = open("YouTubeVideoTopic.txt", encoding="utf8")

youTubeVideoTopic=youTubeVideoUrlListVideoTopic.readlines()

videoDataSteam=1
videoID=1

for videoUrl in youTubeVideoUrlListFile:
    if(videoDataSteam%2==1):
        #print(videoUrl, end='')
        videoID = videoID + 1
        topicID=random.randint(0,17)
        print(youTubeVideoTopic[topicID], end='')

    videoDataSteam=videoDataSteam+1

