import random
from datetime import datetime


dataFileName=open("rating.data","w")
for i in range(70000):
    dt = datetime.now()

    timestamp = datetime.timestamp(dt)
    timestamp=int(timestamp)
    userID=random.randrange(1,632)
    itemID=random.randrange(1,160)
    rating=random.randrange(1,5)
    print(userID,itemID,rating,timestamp)
    dataFileName.write(str(userID)+"\t"+str(itemID)+"\t"+str(rating)+"\t"+str(timestamp)+"\n")


dataFileName.close()
