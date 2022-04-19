from youtube_transcript_api import YouTubeTranscriptApi as yta

import re

my_file = open("YouTubeData/YouTubeURL.txt", "r")

data = my_file.read()

video_group = data.split("\n")
print(video_group)
my_file.close()

lanID = 1
for video_id in video_group:

    data = yta.get_transcript(video_id)

    transcript = ''
    for value in data:
        for key, val in value.items():
            if key == 'text':
                transcript += val+"\n"

    language = "BlogText/Language"+str(lanID)+".txt"
    lanID = lanID+1
    file = open(language, "w")
    file.write(transcript)
    file.close()
