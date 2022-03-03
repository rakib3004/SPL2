from youtube_transcript_api import YouTubeTranscriptApi as yta


import re

'''video_group = ['jUuqBZwwkQw', 'vAoB4VbhRzM', 'xT8oP0wy-A0', 'x7X9w_GIm1s',
               'ravLFzIguCM', 'ok-plXXHlWw', '446E-r0rXHI', '5C_HPTJg5ek',
               'eIQh02xuVw4', '0M8AYU_hPas', 'DHjqpvDnNGE']'''
#https://www.youtube.com/watch?v=4vUtXdXmnRE//music

#
#'ravLFzIguCM'

#Channel Name: FireShip

#Firebase, Lua, Kotline, Python, C sharp, Html, Go, Rust, GraphQL, NestJS, Javascript

my_file = open("academy.txt", "r")

# reading the file
data = my_file.read()

# replacing end splitting the text
# when newline ('\n') is seen.


video_group = data.split("\n")
print(video_group)
my_file.close()


lanID=1
for video_id in video_group:

    data = yta.get_transcript(video_id)

    transcript = ''
    for value in data:
        for key, val in value.items():
            if key=='text':
                transcript+=val+"\n"




    language = "ConvertedText/Language"+str(lanID)+".txt"
    lanID=lanID+1
    file = open(language,"w")
    file.write(transcript)
    file.close()
