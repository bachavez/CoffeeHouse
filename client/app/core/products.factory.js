(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('productsFactory', productsFactory);

    productsFactory.$inject = ['$http'];

    function productsFactory($http) {
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
      .get('api/products')
      .then(function (response){
        return response.data;
      });
    }

     function getById(id) {
      return $http
      .get('/api/products/' + id)
      .then (function(response){
        return response.data;
      });
    }

     function create(product) {
      return $http
      .post('/api/products', product)
      .then(function(response){
        //console.log(response.data);
        return response.data;
      });
    }

     function update(product) {
      return  $http
      .put('api/products/' + product.id, product)
      .then(function(response){
        return response.data;
      });
    }

     function remove(id) {
      return $http
      .delete('api/products/' + id )
      .then(function(response){
        return response.data;
      });
    }

  }
})();
