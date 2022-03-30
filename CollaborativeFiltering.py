import pandas as pd
import numpy as np
from scipy.sparse import csc_matrix
import seaborn as sns
import matplotlib.pyplot as plt


import json
import gzip
import io


with open("Amazon_Instant_Video_5.json", "r", encoding='utf-8-sig') as f:
    data = f.read()
    df = json.loads(data)
    print(df.info())


'''data = open('Amazon_Instant_Video_5.json')
data = open('Amazon_Instant_Video_5.json', "r+", encoding='utf-8-sig')'''
 