(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('saledetailsFactory', saledetailsFactory);

    saledetailsFactory.$inject = ['$http'];

    function saledetailsFactory($http) {
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
      .get('api/saledetails')
      .then(function (response){
        return response.data;
      });
    }

     function getById(id) {
      return $http
      .get('/api/saledetails/' + id)
      .then (function(response){
        return response.data;
      });
    }

     function create(saledetail) {
      return $http
      .post('/api/saledetails', saledetail)
      .then(function(response){
        //console.log(response.data);
        return response.data;
      });
    }

     function update(saledetail) {
      return  $http
      .put('api/saledetails/' + saledetail.id, saledetail)
      .then(function(response){
        return response.data;
      });
    }

     function remove(id) {
      return $http
      .delete('api/saledetails/' + id )
      .then(function(response){
        return response.data;
      });
    }

  }
})();
