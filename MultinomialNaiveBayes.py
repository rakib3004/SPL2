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




twenty_train = fetch_20newsgroups(subset='train', shuffle=True)



text_clf = Pipeline([('vect', CountVectorizer(stop_words='english')), ('tfidf', TfidfTransformer()),
                     ('clf', MultinomialNB())])
text_clf = text_clf.fit(twenty_train.data, twenty_train.target)


twenty_test = fetch_20newsgroups(subset='test', shuffle=True)


deployment_set= open("ConvertedText/Language1.txt","r")

deployment_data = deployment_set.read()

deployment_list = list(deployment_data)

predicted = text_clf.predict(twenty_test.data)


news='We are continuing our series of animated historical videos on the modern wars with the Six-Day War of 1967, also known as the Third Arab–Israeli War during which Israel fought the alliance of Egypt, Syria, Jordan, Iraq. This conflict entered history as short, but decisive, as it took less than a '

computationalNews=[news]


tagPrediction=text_clf.predict(deployment_list)
print(twenty_train.target_names[tagPrediction[0]])
tagElement = twenty_train.target_names[tagPrediction[0]].split('.')

print(tagElement[1:])
'''
tagList = open("TagList.txt", "w")

tagList.write(str(twenty_train.target_names))

tagList.close()

'''







