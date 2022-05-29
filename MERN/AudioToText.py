from re import T
import sys
from youtube_transcript_api import YouTubeTranscriptApi as yta


video_id = sys.argv[1]
videoName = sys.argv[2]







data = yta.get_transcript(video_id)
transcript = ''
for value in data:
    for key, val in value.items():

        if key == 'text':
            val=str(val)
            newVal=val.strip('\n')
            print(newVal,end="")
            transcript += newVal+" "



transcript=transcript.strip()

blogJSON = "../BlogBee/src/app/blog-view/Blog.json"
textBlog="Text.txt"
t_file=open(textBlog, "w")
t_file.writelines(transcript)
t_file.close()
file = open(blogJSON, "w")

file.write('{"id": "'+video_id+'", "text": "')

file.writelines(transcript+'"}')
file.close()
