import pandas as pd
import numpy as np
from scipy.sparse import csc_matrix
import seaborn as sns
import matplotlib.pyplot as plt
import json
import gzip
import io

def extractPath(innie):
    iggy = str(innie)
    getridofme ="<_io.TextIOWrapper name='"
    getridofmetoo ="' mode='r' encoding='UTF-8'>"
    iggy = iggy.replace(getridofme, "")
    iggy = iggy.replace(getridofmetoo, "")
    return iggy

'''with open("Amazon_Instant_Video_5.json", "r", encoding='utf-8-sig') as f:
    data = f.read()'''
    


'''data = open('Amazon_Instant_Video_5.json')
data = open('Amazon_Instant_Video_5.json', "r+", encoding='utf-8-sig')'''
data = open('Amazon_Instant_Video_5.json')
data = extractPath(data)
df = json.loads(data)


avg_num_reviews = df.groupby('reviewerID')['asin'].count()
mean_rating_of_user = df.groupby('reviewerID').apply(lambda x: x['overall'].mean())

print(avg_num_reviews,mean_rating_of_user)

