import re

my_file = open("BlogText/Language1.txt", "r")

data = my_file.read()
jsonData=data.split('\n')

for jd in jsonData:
    print('"'+jd+'",')