import pandas as pd
import numpy as np
from scipy.sparse import csc_matrix
import seaborn as sns
import matplotlib.pyplot as plt


data='''
[
 { "reviewerID" : "16d3586" ,
 "rating" : 3 },
{ "reviewerID" : "@a14482" ,
 "rating" : 4
 },
{ "reviewerID" : "140e19d" ,
 "rating" : 4
 },
{ "reviewerID" : "17327b6" ,
 "rating" : 1
 },
{ "reviewerID" : "14ae5a5" ,
 "rating" : 3
 },
{ "reviewerID" : "131245a" ,
 "rating" : 2
 },
{ "reviewerID" : "16f6e28" ,
 "rating" : 2
 },
{ "reviewerID" : "15fbaa4" ,
 "rating" : 1
 },
{ "reviewerID" : "1ee12a7" ,
 "rating" : 5
 },
{ "reviewerID" : "10bedb4" ,
 "rating" : 1
 },
{ "reviewerID" : "103dbd3" ,
 "rating" : 1
 },
{ "reviewerID" : "167cf4d" ,
 "rating" : 5
 },
{ "reviewerID" : "@a987ac" ,
 "rating" : 2
 },
{ "reviewerID" : "@a3a380" ,
 "rating" : 4
 },
{ "reviewerID" : "1453f44" ,
 "rating" : 1
 },
{ "reviewerID" : "@ad8086" ,
 "rating" : 1
 },
{ "reviewerID" : "r@be858" ,
 "rating" : 2
 },
{ "reviewerID" : "1bbe9ba" ,
 "rating" : 3
 },
{ "reviewerID" : "10455d6" ,
 "rating" : 2
 },
{ "reviewerID" : "11d50c0" ,
 "rating" : 2
 },
{ "reviewerID" : "@e53b93" ,
 "rating" : 3
 },
{ "reviewerID" : "@2de80c" ,
 "rating" : 4
 },
{ "reviewerID" : "144bcfa" ,
 "rating" : 5
 },
{ "reviewerID" : "@6474c2" ,
 "rating" : 2
 },
{ "reviewerID" : "194fa3e" ,
 "rating" : 5
 },
{ "reviewerID" : "@481248" ,
 "rating" : 1
 },
{ "reviewerID" : "@d3c617" ,
 "rating" : 3
 },
{ "reviewerID" : "1947c6b" ,
 "rating" : 2
 },
{ "reviewerID" : "1193f2d" ,
 "rating" : 4
 },
{ "reviewerID" : "15da254" ,
 "rating" : 3
 },
{ "reviewerID" : "1c63996" ,
 "rating" : 1
 },
{ "reviewerID" : "1716361" ,
 "rating" : 4
 },
{ "reviewerID" : "1f3c5b5" ,
 "rating" : 3
 },
{ "reviewerID" : "164951d" ,
 "rating" : 2
 },
{ "reviewerID" : "11210ee" ,
 "rating" : 4
 },
{ "reviewerID" : "17e1886" ,
 "rating" : 5
 },
{ "reviewerID" : "@d1a2f1" ,
 "rating" : 1
 },
{ "reviewerID" : "10e140b" ,
 "rating" : 3
 },
{ "reviewerID" : "@40e464" ,
 "rating" : 1
 },
{ "reviewerID" : "1476842" ,
 "rating" : 1
 },
{ "reviewerID" : "@308db1" ,
 "rating" : 3
 },
{ "reviewerID" : "1c170f0" ,
 "rating" : 3
 },
{ "reviewerID" : "@51c3a8" ,
 "rating" : 2
 },
{ "reviewerID" : "@26b418" ,
 "rating" : 4
 },
{ "reviewerID" : "r@7e868" ,
 "rating" : 5
 },
{ "reviewerID" : "@ed5528" ,
 "rating" : 2
 },
{ "reviewerID" : "@7b84de" ,
 "rating" : 4
 },
{ "reviewerID" : "1ee733d" ,
 "rating" : 2
 },
{ "reviewerID" : "@cf9800" ,
 "rating" : 5
 },
{ "reviewerID" : "@17c264" ,
 "rating" : 3
 }
]'''

#df=json.loads(data)

from readFunctions import openFile
df = openFile('reviews_Amazon_Instant_Video_5.json.gz')


avg_num_reviews = df.groupby('reviewerID').count()
mean_rating_of_user = df.groupby('reviewerID').apply(lambda x: x['overall'].mean())

print(avg_num_reviews,mean_rating_of_user)
