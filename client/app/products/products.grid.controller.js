(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsGridController', ProductsGridController);

    ProductsGridController.$inject = ['productsFactory', '$state'];
    function ProductsGridController(productsFactory, $state) {
        var vm = this;
        
        vm.remove = remove;

        activate();

        ////////////////

        function activate() { 
            productsFactory
            .getData()
            .then(function(products){
                //console.log(products);
                vm.products = products;
            });
        }

         function remove(product){
            productsFactory
            .remove(product.id)
            .then(function(response){
                alert('You have deleted the Customer?');
                $state.reload();
            });
        }
    }
})();
