import random


def randInt(min=0, max=100):
    num = random.random()*100
    return round(num)


print(randInt())
# should print a random integer between 0 to 100


def randInt(min=0, max=50):
    num = random.random()*50
    return round(num)


print(randInt(max=50))
# should print a random integer between 0 to 50


def randInt(min=50, max=100):
    num = random.random()*100
    return round(num)


print(randInt(min=50))
# should print a random integer between 50 to 100


def randInt(min=50, max=500):
    num = random.random()*500
    return round(num)


# should print a random integer between 50 and 500
print(randInt(min=50, max=500))
