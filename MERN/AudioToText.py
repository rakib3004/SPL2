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



def getVideoMetaData(url):
    response = session.get(url)
    response.html.render(sleep=1)
    soup = bs(response.html.html, "html.parser")
    replacable="{'title': '"

    videoMeta = {}

    videoMeta["title"] = soup.find('title').text.strip()

    videoMeta=str(videoMeta)
    videoMeta=videoMeta.replace(replacable,"")
    videoMeta=videoMeta[:-12]
    return videoMeta






data = yta.get_transcript(video_id)
transcript = ''
for value in data:
    for key, val in value.items():

        if key == 'text':
            val=str(val)
            newVal=val.strip('\n')
            print(newVal,end="")
            transcript += newVal+" "


url="https://www.youtube.com/watch?v="+video_id


videoTitle=getVideoMetaData(url)

transcript=transcript.strip()
transcript=transcript.replace("\n","").replace("\r","")

blogJSON = "../BlogBee/src/app/blog-view/Blog.json"
textBlog="Text.txt"
t_file=open(textBlog, "w")
t_file.write(transcript)
t_file.close()
file = open(blogJSON, "w")

file.write('{"id": "'+video_id+'", "title": "'+videoTitle+'", "text": "')

file.write(transcript+'"}')
file.close()



