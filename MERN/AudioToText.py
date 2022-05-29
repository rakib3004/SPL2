import sys
from youtube_transcript_api import YouTubeTranscriptApi as yta


video_id = sys.argv[1]
videoName = sys.argv[2]







data = yta.get_transcript(video_id)
transcript = ''
for value in data:
    for key, val in value.items():
        if key == 'text':
            transcript += val+"\\n"




print(transcript)

blogJSON = "Blog.json"
file = open(blogJSON, "w")

file.write('{"id": "'+video_id+'", "text": "')

file.write(transcript+'"}')
file.close()
