import nltk
from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
import numpy as np
from sklearn.linear_model import SGDClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.model_selection import GridSearchCV
from nltk.stem.snowball import SnowballStemmer
import glob
import os


twenty_train = fetch_20newsgroups(subset='train', shuffle=True)


text_clf = Pipeline([('vect', CountVectorizer(stop_words='english')), ('tfidf', TfidfTransformer()),
                     ('clf', MultinomialNB())])
text_clf = text_clf.fit(twenty_train.data, twenty_train.target)


twenty_test = fetch_20newsgroups(subset='test', shuffle=True)


topicSource = 'ConvertedText/*'

for deployment_set in glob.glob(topicSource):

    deployment_list = open(deployment_set)
    deployment_data = deployment_list.read()
    deployment_list = [deployment_data]

    fileName = os.path.basename(deployment_set)
    deploymentName = os.path.splitext(fileName)[0]

    tagPrediction = text_clf.predict(deployment_list)
    tagElement = twenty_train.target_names[tagPrediction[0]].split('.')
    print(deploymentName, tagElement[:])
