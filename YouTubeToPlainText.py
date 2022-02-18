from youtube_transcript_api import YouTubeTranscriptApi as yta

import re

video_group = ['jUuqBZwwkQw','vAoB4VbhRzM','xT8oP0wy-A0','x7X9w_GIm1s']
#'l9AzO1FMgM8','ravLFzIguCM'

#firebase, lua, kotline, python, java, c sharp
lanID=1
for video_id in video_group:

    data = yta.get_transcript(video_id)

    transcript = ''
    for value in data:
        for key, val in value.items():
            if key=='text':
                transcript+=val+"\n"


    expression_info = transcript.splitlines()
    print(expression_info)
    final_transcript = " ".join(expression_info)


    language = "Language"+str(lanID)+".txt"
    lanID=lanID+1
    file = open(language,"w")
    file.write(final_transcript)
    file.close()