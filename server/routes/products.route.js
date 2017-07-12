const router = require('express').Router();
const db = require('../models');

router.get('/', function(request, response){
  //return all products in the database
  var promise = db.Product.findAll()

  promise.then(function(products){
    response.json(products);
  });
});

router.get('/:id', function(request,response){
  db.Product.findById(request.params.id).then(function(product){
    if (product === null){
      response.sendStatus(404);
    } else{
      response.json(product);
    }
  });
});

router.post('/', function(request, response){
  console.log(request);
  const product = db.Product.build(request.body);

  product.save().then(function(newproduct){

    response.send(newproduct);
  });
});


router.put('/:id', function(request, response){

  db.Product.findById(request.params.id).then(function(product){
   product.update(request.body).then(function(product){
      if (product === null){
      response.sendStatus(404);
    } else{
      response.json(product);
    }
   });
  });


});

router.delete('/:id', function(request,response){
  db.Product.findById(request.params.id).then(function(product){
    product.destroy().then(function(){
      response.json(product);
    });
  });

});


module.exports = router;
