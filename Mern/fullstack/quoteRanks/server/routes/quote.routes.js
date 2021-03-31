const QuoteController = require("../controllers/quote.controller");

module.exports = app => {
  //c
  app.get('/api', QuoteController.createQuote);
  app.post('/api/new', QuoteController.createAuthor);
  app.get('/api/')
  //r
  
};