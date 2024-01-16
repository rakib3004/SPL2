import pandas as pd
import numpy as np
import json


data = open("BlogRating.json", "r")

df = json.loads(data)


avg_num_reviews = df.groupby('reviewerID').count()
mean_rating_of_user = df.groupby('reviewerID').apply(
    lambda x: x['overall'].mean())

print(avg_num_reviews, mean_rating_of_user)
