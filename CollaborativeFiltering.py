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

print(df.info())