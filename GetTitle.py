

from urllib.request import urlopen

import json

id = 'KQEOBZLx-Z8'
url = "http://gdata.youtube.com/feeds/api/videos/"+id



response = urlopen(url)
  

json2 = json.loads(response.read())

title = json2['entry']['title']['$t']
author = json2['entry']['author'][0]['name']

print(title)