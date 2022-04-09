youTubeVideoUrlListFile = open("test_yt_url.txt", "r")

for videoID in youTubeVideoUrlListFile:
    if(len(videoID) < 12):
        print(videoID)
