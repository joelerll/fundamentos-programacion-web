angular.module('listaProyectos').
  component('listaProyectos', {
    templateUrl: './lista-proyectos/lista-proyectos.template.html',
    controller: ["$http", function ListaProyectosController($http) {
      var self = this
      $http.get('../../public/json_files/proyectos/proyectos.json').then(function(response) {
        self.proyectos = response.data
      })
    }]
  })
