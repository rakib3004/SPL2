youTubeVideoUrlListPlainText = open("YouTubePlayList.txt", encoding="utf8")

youTubeVideoUrlListFile=youTubeVideoUrlListPlainText.readlines()


videoDataSteam=1
videoID=1

for videoUrl in youTubeVideoUrlListFile:
    if(videoDataSteam%2==1):
        print(videoUrl, end='')
        videoID = videoID + 1

    videoDataSteam=videoDataSteam+1

