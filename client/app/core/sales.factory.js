(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('salesFactory', salesFactory);

    salesFactory.$inject = ['$http'];

    function salesFactory($http) {
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
      .get('api/sales')
      .then(function (response){
        return response.data;
      });
    }

     function getById(id) {
      return $http
      .get('/api/sales/' + id)
      .then (function(response){
        return response.data;
      });
    }

     function create(sale) {
      return $http
      .post('/api/sales', sale)
      .then(function(response){
        //console.log(response.data);
        return response.data;
      });
    }

     function update(sale) {
      return  $http
      .put('api/sales/' + sale.id, sale)
      .then(function(response){
        return response.data;
      });
    }

     function remove(id) {
      return $http
      .delete('api/sales/' + id )
      .then(function(response){
        return response.data;
      });
    }

  }
})();
