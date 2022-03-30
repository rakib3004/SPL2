import pandas as pd
import numpy as np
from scipy.sparse import csc_matrix
import seaborn as sns
import matplotlib.pyplot as plt


import json
import gzip
 
df = json.loads('Amazon_Instant_Video_5.json')

print(df.info())