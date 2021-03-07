# 1
def a():
    return 5


print(a())


# Prediction: It's going to print 5
# Outcome: I was correct

# 2


def a():
    return 5


print(a()+a())
# Prediction: This is going to print 5 + 5 which will equal 10
# Outcome: I was correct

# 3


def a():
    return 5
    return 10


print(a())
# Prediction: It will return 5 and 10
# Outcome: I was wrong! When it runs a return, it exits the loop therefore 10 is never returned

# 4


def a():
    return 5
    print(10)


print(a())
# Prediction: 5 will printed but 10 will not since the 5 was returned
# Outcome:

# 5


def a():
    print(5)


x = a()
print(x)
# Prediction: 5 will print.
# Outcome:I was correct about the 5 printing but didn't mention why none showed up. Nothing was returned.

# 6


def a(b, c):
    print(b+c)


print(a(1, 2) + a(2, 3))
# Prediction: I think it will show 3,5,8
# Outcome: 3 and 5 printed but 8 did not. Showed an error message instead,

# 7


def a(b, c):
    return str(b)+str(c)


print(a(2, 5))
# Prediction: This will return the arguments as strings to the console. "7" is my prediction.
# Outcome: I was wrong! The answer was simply 25. Not sure as to why.

# 8


def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7


print(a())
# Prediction: 100 and 10 will be printed on console
# Outcome: I was correct

# 9


def a(b, c):
    if b < c:
        return 7
    else:
        return 14
    return 3


print(a(2, 3))
print(a(5, 3))
print(a(2, 3) + a(5, 3))
# Prediction: 7, 14, and 21 will be printed
# Outcome:  I was correct!

# 10


def a(b, c):
    return b+c
    return 10


print(a(3, 5))
# Prediction: 8 will be printed
# Outcome: I was correct

# 11
b = 500
print(b)


def a():
    b = 300
    print(b)


print(b)
a()
print(b)
# Prediction: 500, 500, 300, 500 will be printed out
# Outcome: I was correct!

# 12
b = 500
print(b)


def a():
    b = 300
    print(b)
    return b


print(b)
a()
print(b)
# Prediction: 500, 500, 300, 500 will print out
# Outcome: I was correct!

# 13
b = 500
print(b)


def a():
    b = 300
    print(b)
    return b


print(b)
b = a()
print(b)
# Prediction: 500, 500, 300 ,300 will print out
# Outcome: I was correct!

# 14


def a():
    print(1)
    b()
    print(2)


def b():
    print(3)


a()
# Prediction: This will print 1, 3, 2
# Outcome: I was correct

# 15


def a():
    print(1)
    x = b()
    print(x)
    return 10


def b():
    print(3)
    return 5


y = a()
print(y)
# Prediction: This will print 1, 3, 5, 10
# Outcome: I was correct!
