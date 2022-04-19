import random
from datetime import datetime


dataFileName=open("../Source/rating.data","w")
for i in range(7500):
    dt = datetime.now()

    timestamp = datetime.timestamp(dt)
    timestamp=int(timestamp)
    userID=random.randrange(1,300)
    itemID=random.randrange(1,40)
    rating=random.randrange(1,5)
    print(userID,itemID,rating,timestamp)
    dataFileName.write(str(userID)+"\t"+str(itemID)+"\t"+str(rating)+"\t"+str(timestamp)+"\n")


dataFileName.close()
