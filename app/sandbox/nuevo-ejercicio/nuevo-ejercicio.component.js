angular.
  module('nuevoEjercicio').
  component('nuevoEjercicio', {
    templateUrl: 'nuevo-ejercicio/nuevo-ejercicio.template.html',
    controller: ["$location","$http",'$routeParams',
      function EjerciciosListaController($location,$http,$routeParams) {
        this.autor = $routeParams.profesorId
        this.tags = [

        ];
        this.choices = [];

        this.go = function ( path ) {
          $location.path( path );
        };

          this.nota = ''
          this.formato_de_entrada = ''
          this.salida = ''
          this.ejemplo_entrada = ''
          this.ejemplo_salida = ''
         this.titulo = ''
         this.dificultad = 0
         this.declaracion_problema = ''
         this.formato_de_entrada = ''
         this.constrains = ''
         this.explicacion_problema = ''
        this.errores = ''
        this.ranking = ''

        this.alerts = [
         ];

         this.addAlert = function() {
            var cont = 0
            if (this.alerts.length != 0) {
              this.alerts = []
            }
            if (this.titulo == '') {
                this.alerts.push({msg: 'NO INGRESO TITULO'});
                cont = cont +1
            }
            if (this.dificultad == 0){
                this.alerts.push({msg: 'NO INGRESO DIFICULTAD'});
                cont = cont +1
            }
            if (this.tags.length == 0){
                this.alerts.push({msg: 'NO INGRESO NINGUN TAG'});
                cont = cont +1
            }
            if (this.declaracion_problema == ''){
                this.alerts.push({msg: 'NO INGRESO DECLARACION PROBLEMA'});
                cont = cont +1
            }
            if (this.nota == ''){
                this.alerts.push({msg: 'NO INGRESO NOTA'});
                cont = cont +1
            }
            if (this.formato_de_entrada == ''){
                this.alerts.push({msg: 'NO INGRESO FORMATO DE ENTRADA'});
                cont = cont +1
            }
            if (this.salida == ''){
                this.alerts.push({msg: 'NO INGRESO SALIDA'});
                cont = cont +1
            }
            if (this.ejemplo_entrada == ''){
                this.alerts.push({msg: 'NO INGRESO EJEMPLO ENTRADA'});
                cont = cont +1
            }
            if (this.ejemplo_salida == ''){
                this.alerts.push({msg: 'NO INGRESO EJEMPLO SALIDA'});
                cont = cont +1
            }
            if (this.explicacion_problema == ''){
                this.alerts.push({msg: 'NO INGRESO EXPLICACION PROBLEMA'});
                cont = cont +1
            }
            if (cont = 10){
              this.alerts.push({type: 'success', msg: 'REGISTRO COMPLETADO'});
              this.titulo = ''
              this.dificultad = 0
              this.tags = []
              this.declaracion_problema = ''
              this.nota = ''
              this.formato_de_entrada = ''
              this.salida = ''
              this.ejemplo_entrada = ''
              this.ejemplo_salida = ''
              this.explicacion_problema = ''
            }

         };

         this.closeAlert = function(index) {
           this.alerts.splice(index, 1);
         };
				 this.borrar_alertas = function() {
 	        this.alerts = []
 	      }
    }]
  })
