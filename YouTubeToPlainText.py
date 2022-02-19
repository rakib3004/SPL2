from youtube_transcript_api import YouTubeTranscriptApi as yta

import re

video_group = ['jUuqBZwwkQw', 'vAoB4VbhRzM', 'xT8oP0wy-A0', 'x7X9w_GIm1s',
               'ravLFzIguCM', 'ok-plXXHlWw', '446E-r0rXHI', '5C_HPTJg5ek',
               'eIQh02xuVw4', '0M8AYU_hPas', 'DHjqpvDnNGE']
#'ravLFzIguCM'

#Channel Name: FireShip

#Firebase, Lua, Kotline, Python, C sharp, Html, Go, Rust, GraphQL, NestJS, Javascript
lanID=1
for video_id in video_group:

    data = yta.get_transcript(video_id)

    transcript = ''
    for value in data:
        for key, val in value.items():
            if key=='text':
                transcript+=val+"\n"



    #expression_info = transcript.splitlines()
    #print(expression_info)
    #final_transcript = " ".join(expression_info)



    language = "ConvertedText/Language"+str(lanID)+".txt"
    lanID=lanID+1
    file = open(language,"w")
    file.write(transcript)
    file.close()