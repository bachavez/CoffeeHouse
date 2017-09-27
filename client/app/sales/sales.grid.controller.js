(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController);

    SalesGridController.$inject = ['salesFactory', '$state'];
    function SalesGridController(salesFactory, $state) {
        var vm = this;
        
        vm.remove = remove;

        activate();

        ////////////////

        function activate() { 
            salesFactory
            .getData()
            .then(function(sales){
                vm.sales = sales;
            });
        }

         function remove(product){
            salesFactory
            .remove(product.id)
            .then(function(response){
                alert('You have deleted the Customer?');
                $state.reload();
            });
        }
    }
})();
