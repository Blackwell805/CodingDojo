//1.create a new folder
-> mkdir myNewProject
-> cd myNewProject

//2. create a new project
->npm init -y

//3. install npm packages
-> npm i express mongoose cors

//4.create a new file called server.js
->touch server.js

//5.within the server.js add the following code

->const express = require('express');

```js
const app = express();
const port = 8000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
```

//6. Create a folder called "server" and then create four more folders within that called "config", "controllers", "models" and "routes"

//7. Create React app from backend. Do this by creating new folder. Call it "client". Make sure you are in the same folder level as your "server.js".
->npx create-react-app client

//8. Install Client side npm packages
-> npm install axios @reach/router
