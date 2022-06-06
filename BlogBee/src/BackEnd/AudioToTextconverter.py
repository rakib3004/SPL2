from re import T
import sys
from youtube_transcript_api import YouTubeTranscriptApi as yta
from time import sleep
from urllib import response
from requests import session
from requests_html import HTMLSession
from bs4 import BeautifulSoup as bs


session = HTMLSession()

video_id = sys.argv[1]


data = yta.get_transcript(video_id)
transcript = ''
for value in data:
    for key, val in value.items():

        if key == 'text':
            val=str(val)
            newVal=val.strip('\n')
            print(newVal,end="")
            transcript += newVal+" "


#url="https://www.youtube.com/watch?v="+video_id


transcript=transcript.strip()
transcript=transcript.replace("\n"," ").replace("\r"," ")

# blogJSON = "../BlogBee/src/app/blog-view/Blog.json"
# textBlog="Text.txt"
# t_file=open(textBlog, "w")
# t_file.write(transcript)
# t_file.close()
# file = open(blogJSON, "w")

# file.write('{"id": "'+video_id+'", "title": "'+videoTitle+'", "text": "')

# file.write(transcript+'"}')
# file.close()


print(transcript)

sys.stdout.flush()