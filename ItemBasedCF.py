import pandas as pd
import numpy as np
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd


header = ['user_id', 'item_id', 'rating', 'timestamp']
dataset = pd.read_csv('rating.data', sep='\t', names=header)
print(dataset.head())


n_users = dataset.user_id.unique().shape[0]
n_items = dataset.item_id.unique().shape[0]


n_items = dataset['item_id'].max()
A = np.zeros((n_users, n_items), dtype=int)
for line in dataset.itertuples():
    A[line[1]-1, line[2]-1] = line[3]
print("Original rating matrix : ", A)

for i in range(len(A)):
    for j in range(len(A[0])):
        if A[i][j] >= 3:
            A[i][j] = 1
        else:
            A[i][j] = 0

csr_sample = csr_matrix(A)
print(csr_sample)

knn = NearestNeighbors(metric='cosine', algorithm='brute',
                       n_neighbors=3, n_jobs=-1)
knn.fit(csr_sample)

dataset_sort_des = dataset.sort_values(
    ['user_id', 'timestamp'], ascending=[True, False])
print('Turing Tesing: ', dataset_sort_des)


filter1 = dataset_sort_des[dataset_sort_des['user_id'] == 1].item_id
filter1 = filter1.tolist()
filter1 = filter1[:12]
print("Items liked by user: ", filter1)


distances1 = []
indices1 = []
for i in filter1:
    distances, indices = knn.kneighbors(csr_sample[i], n_neighbors=3)
    indices = indices.flatten()
    indices = indices[1:]
    indices1.extend(indices)
#print("Items to be recommended: ", indices1)
youTubeVideoUrlListPlainText = open("YouTubeVideoID.txt", encoding="utf8")

youTubeVideoUrlListFile=youTubeVideoUrlListPlainText.readlines()

youTubeVideoUrlListTitle = open("YouTubeVideoTitle.txt", encoding="utf8")

youTubeVideoUrlTitleFile=youTubeVideoUrlListTitle.readlines()

youTubeVideoUrlListTopic = open("YouTubeVideoTopic.txt", encoding="utf8")

youTubeVideoUrlTopicFile=youTubeVideoUrlListTopic.readlines()

videoDataSteam=1
videoID=1

print("Videos which are recommended for you:")
for f in filter1:
    #print(youTubeVideoUrlListFile[f], end='')
    print('{ "videoID":"'+youTubeVideoUrlListFile[f].strip()+'"'+', "videoTitle":"'+youTubeVideoUrlTitleFile[f].strip()+'" , "videoTopic":"'+youTubeVideoUrlTopicFile[f].strip()+'" },')

'''
    print('/"videoID"/:/"+'youTubeVideoUrlListFile[f], end='')


'''