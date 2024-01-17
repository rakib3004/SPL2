import nltk
from sklearn.datasets import 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.linear_model import SGDClassifier
from sklearn.pipeline import Pipeline
import json


twenty_train = fetch_20newsgroups(subset='train', shuffle=True)


text_clf = Pipeline([('vect', CountVectorizer()), ('tfidf', TfidfTransformer()),
                     ('clf-svm', SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, random_state=42))])
text_clf = text_clf.fit(twenty_train.data, twenty_train.target)


fetch_20newsgroups
twenty_test = fetch_20newsgroups(subset='test', shuffle=True)


deployment_text= open("Text.txt", "r")


# json_object =  sys.argv[1] if len(sys.argv) > 1 else ''
# data= json.loads(json_object)

# deployment_text  = data.text
# print(data.text)


deployment_data=deployment_text.read()
deployment_list = [deployment_data]


tagPrediction = text_clf.predict(deployment_list)
tagElement = twenty_train.target_names[tagPrediction[0]].split('.')
print(tagElement[:])
