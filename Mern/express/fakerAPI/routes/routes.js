const controller = require('../controllers/controller');
modules.exports = app => {
//c
app.post('/api', controller.createThing);
//r
app.get('/api', controller.getThing);
//u
//d
}