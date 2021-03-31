const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    //c
    app.post('/api/product', ProductController.createProduct);
    //r
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    //u
    app.put('/api/product/:id', ProductController.updateProduct);
    //d
    app.delete('/api/product/:id', ProductController.deleteProduct);
};
