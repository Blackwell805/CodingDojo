x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [
    {'x': 10, 'y': 20}
]

# 1


# def updateVal(arr):
#     arr[1][0] = 15
#     return arr


# print(updateVal(x))

# Jim's way of doing it
# def functionOne(lst, idx, cngVal):
#     print(lst)
#     lst[idx[0]][idx[1]] = cngVal
#     print(lst)
#     return lst


# functionOne(x, [1, 0], 15)

# 2

# def changeLastName(students):
#     students[0]['last_name'] = 'Bryant'
#     return students
# print(changeLastName(students))

# Jim's way of doing it
# def functionTwo(lst, lstName):
#     print(lst)
#     lst[0]['last_name'] = lstName
#     print(lst)
#     return students


# functionTwo(students, 'Myers')

# 3

# def changeFirstName(lst):
#     lst['soccer'][0] = "Andres"
#     return lst


# print(changeFirstName(sports_directory))

# 4
# def changeValue(lst):
#     print(lst)
#     lst[0]['y'] = 30
#     return lst


# print(changeValue(z))


students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def iterateDictionary(some_list):
    for i in range(len(some_list)):
        print(some_list[i])
    return some_list


iterateDictionary(students)

# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# # bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel


# students = [
#     {'first_name':  'Michael', 'last_name': 'Jordan'},
#     {'first_name': 'John', 'last_name': 'Rosales'},
#     {'first_name': 'Mark', 'last_name': 'Guillen'},
#     {'first_name': 'KB', 'last_name': 'Tonel'}
# ]


# def iterateDictionary2(key_name, some_list):
#     for i in range(len(some_list)):
#         print(some_list[i][key_name])
#     return key_name, some_list


# iterateDictionary2('first_name', students)
# iterateDictionary2('last_name', students)


# 4
# dojo = {
#     'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#     'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }

# numberOfLocations = 0
# numberOfInstructors = 0


# def printInfo(lst):
#     print(len(lst['locations']), 'Locations')
#     for i in range(len(lst['locations'])):
#         # print(len(lst['locations']))
#         # print('entered i loop')
#         print(lst['locations'][i])
#         numberOfLocations = len(lst['locations'])
#     print(len(lst['instructors']), 'Instructors')
#     for j in range(len(lst['instructors'])):
#         # print('entered j loop')
#         print(lst['instructors'][j])
#         numberOfInstructors = len(lst['instructors'])
#     return numberOfLocations, numberOfInstructors


# printInfo(dojo)


# # look at this a little more
# def printInfo(myList):
#     for i in myList:
#         print(len(myList[i]), "Location")
#         print(myList[i])


# printInfo(dojo)
