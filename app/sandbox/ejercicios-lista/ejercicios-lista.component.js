angular.
  module('ejerciciosLista').
  component('ejerciciosLista', {
    templateUrl: 'ejercicios-lista.template.html',
    controller: ["$http",function EjerciciosListaController($http) {
      $http.get('../../public/json_files/info.json').then(function(response) {
          self.info = response.data;
          console.log(info.profesores[0].nombre)
      });
    }]
  })
