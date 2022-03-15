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


print("Training Data Set: ",twenty_train)


twenty_test = fetch_20newsgroups(subset='test', shuffle=True)

print("Training Data Set: ",twenty_test)