from youtube_transcript_api import YouTubeTranscriptApi as yta

import re

video_id = 'SUOpsaDV1W4'

data = yta.get_transcript(video_id)

transcript = ''
for value in data:
    for key, val in value.items():
        if key=='text':
            transcript+=val


expression_info = transcript.splitlines()
final_transcript = " ".join("\n")
final_transcript = " ".join(expression_info)


file = open("SPL_ONE.txt","w")
file.write(final_transcript)
file.close()