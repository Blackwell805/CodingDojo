--Create a project
--Copy boiler files over to new project
--in terminal window,
------->npm init -y
------->npm install mongoose express
-->go into file of new project. Type into terminal ----> mongo
-->inside of Mongoose.config, change URL path to the name of project.
example: mongoose.connect("mongodb://localhost/Jokes"
---->Next, go through the files and change the word "User/s" for the name of the project.
--->MAKE SURE that the server.js file is on the same level as the project file name.
----->Also make sure that the Node Modules folder is also on the same level as the project file name.
-------->>ALSO.....the two package-JSON files....
After doing this....go to the project file and in the terminal run ----> nodemon server.js
