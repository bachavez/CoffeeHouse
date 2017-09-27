(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('customersFactory', customersFactory);

    customersFactory.$inject = ['$http'];

    function customersFactory($http) {
        var service = {
            getData: getData,
            getById: getById,
            create: create,
            update: update,
            remove: remove
    };

    return service;

    ////////////////
    function getData() {
      return $http
      .get('api/customers')
      .then(function (response){
        return response.data;
      });
    }

     function getById(id) {
      return $http
      .get('/api/customers/' + id)
      .then (function(response){
        return response.data;
      });
    }

     function create(customer) {
      return $http
      .post('/api/customers', customer)
      .then(function(response){
        //console.log(response.data);
        return response.data;
      });
    }

     function update(customer) {
      return  $http
      .put('api/customers/' + customer.id, customer)
      .then(function(response){
        return response.data;
      });
    }

     function remove(id) {
      return $http
      .delete('api/customers/' + id )
      .then(function(response){
        return response.data;
      });
    }

  }
})();

