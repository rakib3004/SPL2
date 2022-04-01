import pandas as pd
import numpy as np
from scipy.sparse import csc_matrix
import json

with open('Amazon_Instant_Video_5.json', 'r') as json_file:
	json_load = json.load(json_file)

parsed_json = (json.loads(json_data))
print(json.dumps(parsed_json, indent=4, sort_keys=True))


def extractPath(innie):
    iggy = str(innie)
    getridofme ="<_io.TextIOWrapper name='"
    getridofmetoo ="' mode='r' encoding='UTF-8'>"
    iggy = iggy.replace(getridofme, "")
    iggy = iggy.replace(getridofmetoo, "")
    return iggy


'''
data = open('Amazon_Instant_Video_5.json')
data2 = extractPath(data)
df = json.loads(data2)

parsed_json = (json.loads(json_data))
print(json.dumps(parsed_json, indent=4, sort_keys=True))


avg_num_reviews = df.groupby('reviewerID')['asin'].count()
mean_rating_of_user = df.groupby('reviewerID').apply(lambda x: x['overall'].mean())

print(avg_num_reviews,mean_rating_of_user)

'''