import joblib
from sklearn.datasets import fetch_20newsgroups


twenty_train = fetch_20newsgroups()

print(twenty_train)

loaded_model = joblib.load('text_classification_model.joblib')

deployment_text = open("Text.txt", "r")
deployment_data = deployment_text.read()
deployment_list = [deployment_data]

tagPrediction = loaded_model.predict(deployment_list)
tagElement = twenty_train.target_names[tagPrediction[0]].split('.')
print(tagElement[:])