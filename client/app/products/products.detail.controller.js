(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsDetailController', ProductsDetailController);

    ProductsDetailController.$inject = ['productsFactory', '$stateParams', '$state'];
    function ProductsDetailController(productsFactory, $stateParams, $state) {
        var vm = this;

        vm.save = save;
        

        activate();

        ////////////////

        function activate() { 
            console.log($stateParams);
            if($stateParams.id) {
                productsFactory
                .getById($stateParams.id)
                .then(function(product){
                    vm.product = product;
                    console.log('Product:' + product);
                }); 
            } else {
                vm.product = {};
            }
            
        }

        function save(product){
            console.log(product);
            if(product.id){
                productsFactory
                .update(product)
                .then(function(){
                    alert('product Updated!');
                    $state.go('product-grid');
                });
            } else {
                productsFactory
                .create(product)
                .then(function(){
                    alert('product Created!');
                    $state.go('product-grid');
                });
             }
            
        }
    }
})();
