(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController);

    CustomersGridController.$inject = ['customersFactory', '$state'];
    function CustomersGridController(customersFactory, $state) {
        var vm = this;
        
        vm.remove = remove;

        activate();

        ////////////////

        function activate() { 
            customersFactory
            .getData()
            .then(function(customers){
                vm.customers = customers;
            });
        }

         function remove(id){
            customersFactory
            .remove(id.id)
            .then(function(response){
                alert('You have deleted the Customer?');
                $state.reload();
            });
        }
    }
})();
