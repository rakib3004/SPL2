import sys
from googleapiclient.discovery import build

apiKey = 'AIzaSyCDqpvkFcSA2OucamX9Uk429DTXLNAvZkk'
'''AIzaSyCwZD2c9MP_aX8ndJ85JKVGliGgTP9el0c'''

youtube = build('youtube', 'v2', developerKey=apiKey)

req = youtube.search().list(q='github', part='snippet', type='video')

res = req.execute()


print(res)
