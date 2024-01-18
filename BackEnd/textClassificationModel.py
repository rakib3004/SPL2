import nltk
from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import SGDClassifier
from sklearn.pipeline import Pipeline
import joblib
from sklearn.datasets import load_digits
from sklearn.datasets import fetch_lfw_people
import json

# breast_cancer_data = load_breast_cancer()

# # Convert the dataset to a JSON-compatible format
# json_data = json.dumps({
#     'data': breast_cancer_data.data.tolist(),
#     'target': breast_cancer_data.target.tolist(),
#     'target_names': breast_cancer_data.target_names.tolist(),
#     'feature_names': breast_cancer_data.feature_names.tolist(),
#     'DESCR': breast_cancer_data.DESCR,
#     'filename': breast_cancer_data.filename
# }, indent=4)

json_data = fetch_lfw_people()

# Write the JSON data to the file
# with open('news.txt', 'w') as file:
#     file.write(str(json_data))

print(json_data)
# twenty_train = fetch_20newsgroups(subset='train', shuffle=True)

# text_clf = Pipeline([('vect', CountVectorizer()), ('tfidf', TfidfTransformer()),
#                      ('clf-svm', SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, random_state=42))])
# text_clf = text_clf.fit(twenty_train.data, twenty_train.target)


# joblib.dump(text_clf, 'text_classification_model.joblib')
