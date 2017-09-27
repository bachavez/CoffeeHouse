(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController);

    SalesDetailController.$inject = ['salesFactory', '$stateParams', '$state', 'productsFactory'];
    function SalesDetailController(salesFactory, $stateParams, $state, productsFactory) {
        var vm = this;

        vm.save = save;
        vm.addDrink = addDrink;
        

        activate();

        ////////////////

        function activate() { 
            //if($stateParams.id) { $stateParams.id
                salesFactory
                .getById(2)
                .then(function(sale){
                    console.log(sale);
                    vm.sale = sale;
                }); 
           // } else {
           //     console.log(sale);
           //     vm.sale = {};
          //  }
            
            productsFactory
            .getData()
            .then(function(products){
                vm.products = products;
            });
        }

        function save(sale){
            if(sale.id){
                salesFactory
                .update(sale)
                .then(function(){
                    alert('sale Updated!');
                    $state.go('sale-grid');
                });
            } else {
                salesFactory
                .create(sale)
                .then(function(){
                    alert('sale Created!');
                    $state.go('sale-grid');
                });
             }
        }

        function addDrink(product){
            console.log(product);
            alert ('Selected drink: ' + product.productName);
            salesFactory
            .update(product)
            .then(function(){
                $state.go('sales-detail');
            });
        }
            
        
    }
})();
