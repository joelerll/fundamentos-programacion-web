angular.module('editarEjercicio').
  component('editarEjercicio', {
    templateUrl: './editar-ejercicio/editar-ejercicio.template.html',
    controller: ['$routeParams','$http',
      function($routeParams,$http) {
        var self = this
        $http.get('../../public/json_files/ejercicios/'+$routeParams.ejercicioId+'.json').then(function(response) {
          self.ejercicio = response.data
          self.declaracion_problema = self.ejercicio.declaration
          self.nota= ''
          self.ejercicio.notes.forEach(function(nota) {
            self.nota = self.nota + nota + '\n'
          })
          self.formato_de_entrada = self.ejercicio.input_format
          self.ejercicio.constrains.forEach(function(constrains) {
            self.constrains = self.constrains + constrains + '\n'
          })
          self.ejercicio.outputs_format.forEach(function(salida) {
            self.salida = self.salida + salida + '\n'
          })
          self.ejemplo_entrada = ''
          self.ejercicio.samples_input.forEach(function(ejemplo_entrada) {
              self.ejemplo_entrada = self.ejemplo_entrada + ejemplo_entrada + '\n'
          })
          self.ejemplo_salida = ''
          self.ejercicio.samples_output.forEach(function(ejemplo_salida) {
              self.ejemplo_salida = self.ejemplo_salida + ejemplo_salida + '\n'
          })
          self.explicacion_problema = self.ejercicio.explanation
        })
        $http.get('../../public/json_files/ejercicios/ejercicios.json').then(function(response) {
            response.data.forEach(function(ejercicio) {
              if(ejercicio.id == $routeParams.ejercicioId) {
                self.tags = []
                self.ejercicio_data = ejercicio
                self.titulo = {
                  text: self.ejercicio_data.titulo
                }
                self.ejercicio_data.etiquetas.forEach(function(tag) {
                  self.tags.push({ text: tag})
                })
                self.dificultad = self.ejercicio_data.nivel_dificultad

              }
            })
        })
      }]
  })
