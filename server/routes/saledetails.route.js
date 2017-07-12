const router = require('express').Router();
const db = require('../models');

router.get('/', function(request, response){
  //return all salesDetails in the database
  var promise = db.SaleDetail.findAll()

  promise.then(function(salesDetails){
    response.json(salesDetails);
  });
});

router.get('/:id', function(request,response){
  db.SaleDetail.findById(request.params.id).then(function(salesDetail){
    if (salesDetail === null){
      response.sendStatus(404);
    } else{
      response.json(salesDetail);
    }
  });
});

router.post('/', function(request, response){
  console.log(request);
  const salesDetail = db.SaleDetail.build(request.body);

  salesDetail.save().then(function(newsalesDetail){

    response.send(newsalesDetail);
  });
});


router.put('/:id', function(request, response){

  db.SaleDetail.findById(request.params.id).then(function(salesDetail){
   salesDetail.update(request.body).then(function(salesDetail){
      if (salesDetail === null){
      response.sendStatus(404);
    } else{
      response.json(salesDetail);
    }
   });
  });


});

router.delete('/:id', function(request,response){
  db.SaleDetail.findById(request.params.id).then(function(salesDetail){
    salesDetail.destroy().then(function(){
      response.json(salesDetail);
    });
  });

});


module.exports = router;
