const router = require('express').Router();
const db = require('../models');

router.get('/', function(request, response){
  //return all customers in the database
  var promise = db.Customer.findAll()

  promise.then(function(customers){
    response.json(customers);
  });
});

router.get('/:id', function(request,response){
  db.Customer.findById(request.params.id).then(function(customer){
    if (customer === null){
      response.sendStatus(404);
    } else{
      response.json(customer);
    }
  });
});

router.post('/', function(request, response){
  console.log(request);
  const customer = db.Customer.build(request.body);

  customer.save().then(function(newCustomer){

    response.send(newCustomer);
  });
});


router.put('/:id', function(request, response){

  db.Customer.findById(request.params.id).then(function(customer){
   customer.update(request.body).then(function(customer){
      if (customer === null){
      response.sendStatus(404);
    } else{
      response.json(customer);
    }
   });
  });


});

router.delete('/:id', function(request,response){
  db.Customer.findById(request.params.id).then(function(customer){
    customer.destroy().then(function(){
      response.json(customer);
    });
  });

});


module.exports = router;
