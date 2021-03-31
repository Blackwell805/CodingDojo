const express = require('express');
const cors = require('cors')
const app = express();

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./server/routes/pet.routes')(app); //Change the name of user to new name in 

app.listen(8000, ()=> {
    console.log('Listening at Port 8000')
})