import nltk
from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import SGDClassifier
from sklearn.pipeline import Pipeline
import joblib

twenty_train = fetch_20newsgroups(subset='train', shuffle=True)


text_clf = Pipeline([('vect', CountVectorizer()), ('tfidf', TfidfTransformer()),
                     ('clf-svm', SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, random_state=42))])
text_clf = text_clf.fit(twenty_train.data, twenty_train.target)


joblib.dump(text_clf, 'text_classification_model.joblib')
