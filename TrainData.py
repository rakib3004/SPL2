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


deployment_set= open("ConvertedText/Language2.txt","r")

deployment_data = deployment_set.read()

deployment_list = list(deployment_data)
predicted = text_clf.predict(deployment_list)
print(predicted == twenty_test.target)


print(np.mean(predicted == twenty_test.target))

print(dir(predicted))
print(dir(twenty_test))

print(type(twenty_test.data))
print(type(deployment_data))