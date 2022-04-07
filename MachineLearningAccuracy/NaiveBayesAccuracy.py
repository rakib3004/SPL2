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


predicted = text_clf.predict(twenty_test.data)


mnb_accuracy = np.mean(predicted == twenty_test.target)
mnb_accuracy = mnb_accuracy*100

print('Multimonial Naive Bayes Accuracy: ', mnb_accuracy, "%")


tagList = open("NB.txt", "w")

tagList.write("Multimonial Naive Bayes Accuracy: "+str(mnb_accuracy)+"%")

tagList.close()
