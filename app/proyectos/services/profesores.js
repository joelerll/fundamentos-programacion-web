angular.module('proyectosApp').service('ProfesoresService', function($http) {
  var service = {
    getAllProfesores: function() {
      return $http.get('../../public/json_files/info_joel.json', { cache: true }).then(function(resp) {
        return resp.data.profesores;
      });
    }

    /*
    getProfesor: function(id) {
      function profesorEncontrar(profesor) {
        profesor.correo.forEach(function(correo) {
            if (profesor.correo.length == 2) {
              return profesor.correo[1] == id
            }else {
              return profesor.correo[0] == id
            }
        })
      }

      return service.getAllProfesores().then(function (profesores) {
        return profesor.find(profesorEncontrar)
      });

    }*/
  }

  return service;
})
