<!--Create 5 students with the appropriate info. -->

brdb.my_first_db.insert({name: "Abigail", home_state:"UT", lucky_number: 12, birthday: {january: 1, day: 1, year: 2011}})
WriteResult({ "nInserted" : 1 })

> db.my_first_db.insert({name: "Randy", home_state:"ID", lucky_number: 5, birthday: {febuary: 5, day: 12, year: 2013}})
> WriteResult({ "nInserted" : 1 })
> db.my_first_db.insert({name: "Jack", home_state:"WA", lucky_number: 6, birthday: {march: 3, day: 20, year: 2012}})
> WriteResult({ "nInserted" : 1 })
> db.my_first_db.insert({name: "Bruce", home_state:"UT", lucky_number: 11, birthday: {july: 7, day: 29, year: 2011}})
> WriteResult({ "nInserted" : 1 })
> db.my_first_db.insert({name: "Kali", home_state:"WA", lucky_number: 8, birthday: {august: 8, day: 1, year: 1989}})
> WriteResult({ "nInserted" : 1 })

<!-- Get all students. -->

> db.my_first_db.find({name})
> uncaught exception: ReferenceError: name is not defined :
> @(shell):1:22
> db.my_first_db.find({}).pretty()
> {

    "_id" : ObjectId("60550d18f0d9abadab959355"),
    "name" : "Abigail",
    "home_state" : "UT",
    "lucky_number" : 12,
    "birthday" : {
    	"january" : 1,
    	"day" : 1,
    	"year" : 2011
    }

}
{
"\_id" : ObjectId("60550d66f0d9abadab959356"),
"name" : "Randy",
"home_state" : "ID",
"lucky_number" : 5,
"birthday" : {
"febuary" : 5,
"day" : 12,
"year" : 2013
}
}
{
"\_id" : ObjectId("60550dacf0d9abadab959357"),
"name" : "Jack",
"home_state" : "WA",
"lucky_number" : 6,
"birthday" : {
"march" : 3,
"day" : 20,
"year" : 2012
}
}
{
"\_id" : ObjectId("60550dd3f0d9abadab959358"),
"name" : "Bruce",
"home_state" : "UT",
"lucky_number" : 11,
"birthday" : {
"july" : 7,
"day" : 29,
"year" : 2011
}
}
{
"\_id" : ObjectId("60550e06f0d9abadab959359"),
"name" : "Kali",
"home_state" : "WA",
"lucky_number" : 8,
"birthday" : {
"august" : 8,
"day" : 1,
"year" : 1989
}
}

<!--Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).  -->

db.my_first_db.find({home_state:"WA"}).pretty()
{
"\_id" : ObjectId("60550dacf0d9abadab959357"),
"name" : "Jack",
"home_state" : "WA",
"lucky_number" : 6,
"birthday" : {
"march" : 3,
"day" : 20,
"year" : 2012
}
}
{
"\_id" : ObjectId("60550e06f0d9abadab959359"),
"name" : "Kali",
"home_state" : "WA",
"lucky_number" : 8,
"birthday" : {
"august" : 8,
"day" : 1,
"year" : 1989
}
}

<!-- Get all students whose lucky number is greater than 3 -->

db.my_first_db.find({lucky_number: {$gte: 3}}).pretty()

<!--Get all students whose lucky number is less than or equal to 10  -->

db.my_first_db.find({lucky_number: {$lte: 10}}).pretty()

<!--Get all students whose lucky number is between 1 and 9 (inclusive)  -->

db.my_first_db.find({lucky_number: {$gte:1, $lte:9}})

<!-- Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation. -->

db.students.updateMany({},{$set: {interests:["coding","brunch","MongoDB"]}})

<!--  Add some unique interests for each particular student into each of their interest arrays.-->

> db.students.update({name:"Abigail"}, {$set: {interests: "reading"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name:"Randy"}, {$set: {interests: "fighting"}})
> WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name:"Jack"}, {$set: {interests: "laughing"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name:"Bruce"}, {$set: {interests: "being daddy's buddy"}})
> WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name:"Alayne"}, {$set: {interests: "being a Mom"}})
> WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })

<!-- Add the interest 'taxes' into someone's interest array. -->

db.students.update({name:"Alayne"}, {$set: {interests: "fighting against taxes"}})
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })

<!-- Remove the 'taxes' interest you just added. -->

db.students.update({\_id: ObjectId("6055339cf0d9abadab95935f")}, {$pop: {interests: 1}})

<!-- Remove all students who are from California. -->

db.students.remove({home_state: "WA"})

<!-- Remove a student by name. -->

db.students.remove({name: "Abigail"})

<!-- Remove a student whose lucky number is greater than 5 (JUST ONE) -->

db.students.remove({lucky_number:{$gte:5}},true)
WriteResult({ "nRemoved" : 1 })

<!-- Add a field to each student collection called 'number_of_belts' and set it to 0. -->

> db.students.updateMany({},{$set: {number_of_belts: 0}})

<!-- Increment this field by 1 for all students in Washington (Seattle Dojo). -->

> db.students.updateMany({home_state:"UT"}, {$set: {number_of_belts: 1}})

<!-- Rename the 'number_of_belts' field to 'belts_earned' -->

db.students.updateMany({home_state:"UT"}, {$set: {belts_earned: 1}})

<!-- Remove the 'lucky_number' field. -->

> db.students.updateMany({},{$unset: {lucky_number:""}})

<!--Add a 'updated_on' field, and set the value as the current date.  -->

db.students.updateMany({}, {$currentDate: {update_on: true}})
