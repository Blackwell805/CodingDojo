const express = require("express");
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.listen(8000, () =>
  console.log(`Server is locked and loaded on port 8000!`)
);


