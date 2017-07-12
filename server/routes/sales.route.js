const router = require('express').Router();
const db = require('../models');

router.get('/', function(request, response){
  //return all sales in the database
  var promise = db.Sale.findAll()

  promise.then(function(sales){
    response.json(sales);
  });
});

router.get('/:id', function(request,response){
  db.Sale.findById(request.params.id).then(function(sale){
    if (sale === null){
      response.sendStatus(404);
    } else{
      response.json(sale);
    }
  });
});

router.post('/', function(request, response){
  console.log(request);
  const sale = db.Sale.build(request.body);

  sale.save().then(function(newsale){

    response.send(newsale);
  });
});


router.put('/:id', function(request, response){

  db.Sale.findById(request.params.id).then(function(sale){
   sale.update(request.body).then(function(sale){
      if (sale === null){
      response.sendStatus(404);
    } else{
      response.json(sale);
    }
   });
  });


});

router.delete('/:id', function(request,response){
  db.Sale.findById(request.params.id).then(function(sale){
    sale.destroy().then(function(){
      response.json(sale);
    });
  });

});


module.exports = router;
