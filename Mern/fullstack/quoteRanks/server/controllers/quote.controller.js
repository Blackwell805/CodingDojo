const {Author} = require("../models/author.model");
module.exports.index = (request,response)=> {
  response.json({
    message: "Hello from Product Controller!"
  })
}

//C
module.exports.createQuote = (request, response) => {
  Author.create(
    request.body
  )
  .then(quote=>response.json(quote))
  .catch(err=>response.json(err))
}
module.exports.createAuthor = (request, response) => {
  Author.create(
    request.body
  )
  .then(author=>response.json(author))
  .catch(err=>response.json(err))
}
module.exports.getAllAuthors = (request, response)=>{
  Author.find(
    request.body
  )
  .then(quotes=>response.json(quotes))
  .catch(err=>response.json(err));
}

//R
// module.exports.getAllQuotes = (request, response) => {
//   Quote.find()
//     .then(quotes => response.json(quotes))
//     .catch(err => response.json(err));
// };

