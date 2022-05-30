from time import sleep
from urllib import response
from requests import session
from requests_html import HTMLSession
from bs4 import BeautifulSoup as bs

session = HTMLSession()

def getVideoMetaData(url):
    response = session.get(url)
    response.html.render(sleep=1)
    soup = bs(response.html.html, "html.parser")


    videoMeta = {}

    videoMeta["title"] = soup.find('title').text.strip()

    print(videoMeta)


getVideoMetaData("https://www.youtube.com/watch?v=xA4QWwaweWA")