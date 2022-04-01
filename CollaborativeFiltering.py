'''import pandas as pd
import numpy as np
from scipy.sparse import csc_matrix'''
import json

'''f = open('BlogRating.json')

data = json.load(f)'''

with open('BlogRating.json', 'r') as myfile:
    data=myfile.read()

# parse file
df = json.loads(data)



'''


avg_num_reviews = df.groupby('reviewerID').count()
mean_rating_of_user = df.groupby('reviewerID').apply(lambda x: x['overall'].mean())

print(avg_num_reviews,mean_rating_of_user)
'''