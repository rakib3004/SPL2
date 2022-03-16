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


print('20 Train data',twenty_train.target_names)

print("\n".join(twenty_train.data[0].split("\n")[:3])) #prints first line of the first data file


print(len(twenty_train.data))


count_vect = CountVectorizer()
X_train_counts = count_vect.fit_transform(twenty_train.data)
print('Train Set Count: ',X_train_counts.shape)




tfidf_transformer = TfidfTransformer()
X_train_tfidf = tfidf_transformer.fit_transform(X_train_counts)
print('Term Frequency Data: \n',X_train_tfidf)
print('Train Text Frequency: ',X_train_tfidf.shape)



text_clf = Pipeline([('vect', CountVectorizer()), ('tfidf', TfidfTransformer()), ('clf', MultinomialNB())])

twenty_test = fetch_20newsgroups(subset='test', shuffle=True)

text_clf_svm = Pipeline([('vect', CountVectorizer()), ('tfidf', TfidfTransformer()),
                         ('clf-svm', SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, max_iter=1, random_state=42))])

parameters = {'vect__ngram_range': [(1, 1), (1, 2)], 'tfidf__use_idf': (True, False), 'clf__alpha': (1e-2, 1e-3)}

deployment_set= open("ConvertedText/Language2.txt","r")

deployment_data = deployment_set.read()


gs_clf = GridSearchCV(text_clf, parameters, n_jobs=-1)
gs_clf = gs_clf.fit(twenty_train.data, twenty_train.target)
predicted_gs_clf=gs_clf.predict(twenty_test.data)


#print('Grid Search Prediction: ',predicted_gs_clf)
#print('Testing  value: ',twenty_test.target)

#print('Grid Search Accuracy dataset: ', predicted_gs_clf==twenty_test.target)
             




#print('Grid Search Accuracy %: ', np.mean(predicted_gs_clf==twenty_test.target))
'''

print('The best score is: ',gs_clf.best_score_)
print('The best params is: ',gs_clf.best_params_)





text_clf = Pipeline([('vect', CountVectorizer(stop_words='english')), ('tfidf', TfidfTransformer()),
                     ('clf', MultinomialNB())])

text_clf_svm = Pipeline([('vect', CountVectorizer()), ('tfidf', TfidfTransformer()),
                         ('clf-svm', SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, max_iter=1, random_state=42))])


text_clf_svm = text_clf_svm.fit(twenty_train.data, twenty_train.target)
predicted_svm = text_clf_svm.predict(twenty_test.data)
print('SVM Accuracy: ',np.mean(predicted_svm == twenty_test.target))


print(predicted_svm)


'''
