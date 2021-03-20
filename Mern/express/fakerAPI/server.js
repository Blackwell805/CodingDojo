const express = require("express");
const app = express();



// make sure these lines are above any app.get or app.post code blocks
//our app needs to be able to accept json requests that are encoded in the url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/routes')(app);

app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

app.post("/api", (req,res) => {
    //do what you must and return something
    //if we have data coming through with the request, ie, a form submission:
    var dataFromRequest = req.body;
    res.json(dataFromRequest);
})






// this needs to below the other code blocks
app.listen(8000, () =>
    console.log(`Server is locked and loaded on port 8000!`)
);

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});