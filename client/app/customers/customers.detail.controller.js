(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController);

    CustomersDetailController.$inject = ['customersFactory', '$stateParams', '$state'];
    function CustomersDetailController(customersFactory, $stateParams, $state) {
        var vm = this;

        vm.save = save;
        

        activate();

        ////////////////

        function activate() { 
            if($stateParams.id) {
                customersFactory
                .getById($stateParams.id)
                .then(function(customer){
                    vm.customer = customer;
                }); 
            } else {
                vm.customer = {};
            }
            
        }

        function save(customer){
            console.log(customer);
            if(customer.id){
                customersFactory
                .update(customer)
                .then(function(){
                    alert('Customer Updated!');
                    $state.go('customer-grid');
                });
            } else {
                customersFactory
                .create(customer)
                .then(function(){
                    alert('Customer Created!');
                    $state.go('customer-grid');
                });
             }
            
        }
    }
})();
