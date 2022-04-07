youTubeVideoUrlListFile = open("YouTubePlayList.txt", "r")

for videoID in youTubeVideoUrlListFile:
    if(len(videoID) < 12):
        print(videoID)
