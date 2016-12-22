angular.
  module('nuevoEjercicio').
  component('nuevoEjercicio', {
    templateUrl: 'nuevo-ejercicio/nuevo-ejercicio.template.html',
    controller: ["$location","$http",'$routeParams',"$anchorScroll","$window",'$route',
      function EjerciciosListaController($location,$http,$routeParams,$anchorScroll,$window,$route) {
        this.autor = $routeParams.profesorId
        this.tags = [];
        this.choices = [];

        this.go = function ( path ) {
          $location.path( path );
        };

        this.alerts = [
         ];
				this.alert_terminado = [

				]
         this.addAlert = function() {
            var cont = 0
						var mensaje = 'NO INGRESO '
            if (this.alerts.length != 0) {
              this.alerts = []
            }
            if (this.ejercicio.titulo == '') {
							this.alerts.push({type: 'danger',msg: 'NO INGRESO TITULO '});
							mensaje = mensaje + 'TITULO   '
                cont = cont +1
            }
            if (this.dificultad == 0){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO DIFICULTAD '});
							mensaje = mensaje + 'DIFICULTAD   '
                cont = cont +1
            }
            if (this.tags.length == 0){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO TAGS '});
                mensaje = mensaje + 'TAGS   '
                cont = cont +1
            }
            if (this.declaracion_problema == ''){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO PROBLEMA '});
                mensaje = mensaje + 'PROBLEMA   '
                cont = cont +1
            }
            if (this.nota == ''){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO NOTAS '});
                mensaje = mensaje + 'NOTAS   '
                cont = cont +1
            }
            if (this.formato_de_entrada == ''){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO FORMATO ENTRADA'});
                mensaje = mensaje + 'FORMATO ENTRADA   '
                cont = cont +1
            }
            if (this.salida == ''){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO SALIDA'});
                mensaje = mensaje + 'SALIDA   '
                cont = cont +1
            }
            if (this.ejemplo_entrada == ''){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO EJEMPLO ENTRADA'});
                mensaje = mensaje + 'EJEMPLO ENTRADA   '
                cont = cont +1
            }
            if (this.ejemplo_salida == ''){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO EJEMPLO SALIDA'});
                mensaje = mensaje + 'EJEMPLO SALIDA   '
                cont = cont +1
            }
            if (this.explicacion_problema == ''){
							this.alerts.push({type: 'danger',msg: 'NO INGRESO EXPLICACION PROBLEMA '});
                mensaje = mensaje + 'EXPLICACION PROBLEMA'
                cont = cont +1
            }
						if (cont >= 1){

							$anchorScroll();
							this.alert_terminado = []
						}
            this.limpiar = true
            if (cont == 0){
              this.alert_terminado.push({type: 'success', msg: 'REGISTRO COMPLETADO'});
              /*
              $route.reload()*/
              if (this.alert_terminado.length != 0){
                this.alert_terminado = []
              }
            }

         };

         this.closeAlert = function(index) {
           this.alerts.splice(index, 1);
         };
         this.closeAlertT= function(index) {
           this.alert_terminado.splice(index, 1);
         };
				 this.borrar_alertas = function() {
 	        this.alerts = []
 	      }
        this.alert_terminado = []

        this.ejercicio = {};
          //*this.reset = function(form) {*/
          this.update = function(form) {
            console.log(this.ejercicio)
            this.alerts = []
            var error = true
            try {
              console.log(this.ejercicio.declaracion_problema)
              if (this.ejercicio.titulo === undefined){
                this.alerts.push({type: 'danger',msg: 'TITULO NO ESTA CORRECTAMENTE INGRESADO '});
                console.log('indefinido titulo')
                error = false
              }
            }catch(err){
              error = false
              console.log('titulo indefinido')
              this.alerts.push({type: 'danger',msg: 'TITULO NO ESTA CORRECTAMENTE INGRESADO '});
            }
            try {
              if (this.ejercicio.declaracion_problema === undefined){
                console.log('indefinido declaracion_problema')
                this.alerts.push({type: 'danger',msg: 'DECLARACION PROBLEMA NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.declaracion_problema)
            }catch(err){
              error = false
              console.log('declaracion indefinido')
              this.alerts.push({type: 'danger',msg: 'DECLARACION PROBLEMA NO ESTA CORRECTAMENTE INGRESADO '});
            }

            try {
              if (this.ejercicio.nota === undefined){
                console.log('indefinido notas')
                this.alerts.push({type: 'danger',msg: 'NOTAS NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.nota)
            }catch(err){
              error = false
              console.log('notas indefinido')
              this.alerts.push({type: 'danger',msg: 'NOTAS NO ESTA CORRECTAMENTE INGRESADO '});
            }

            try {
              if (this.ejercicio.formato_de_entrada === undefined){
                console.log('indefinido formato_de_entrada')
                this.alerts.push({type: 'danger',msg: 'FORMATO ENTRADA NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.formato_de_entrada)
            }catch(err){
              error = false
              console.log('formato_de_entrada indefinido')
              this.alerts.push({type: 'danger',msg: 'FORMATO ENTRADA NO ESTA CORRECTAMENTE INGRESADO '});
            }

            try {
              if (this.ejercicio.salida === undefined){
                console.log('indefinido salida')
                this.alerts.push({type: 'danger',msg: 'SALIDA NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.salida)
            }catch(err){
              error = false
              console.log('salida indefinido')
              this.alerts.push({type: 'danger',msg: 'SALIDA NO ESTA CORRECTAMENTE INGRESADO '});
            }

            try {
              if (this.ejercicio.ejemplo_entrada === undefined){
                console.log('indefinido ejemplo_entrada')
                  this.alerts.push({type: 'danger',msg: 'EJEMPLO ENTRADA NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.ejemplo_entrada)
            }catch(err){
              error = false
              console.log('ejemplo_entrada indefinido')
              this.alerts.push({type: 'danger',msg: 'EJEMPLO ENTRADA NO ESTA CORRECTAMENTE INGRESADO '});
            }

            try {
              if (this.ejercicio.ejemplo_salida === undefined){
                console.log('indefinido ejemplo_salida')
                this.alerts.push({type: 'danger',msg: 'EJEMPLO SALIDA NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.ejemplo_salida)
            }catch(err){
              error = false
              console.log('ejemplo_salida indefinido')
              this.alerts.push({type: 'danger',msg: 'EJEMPLO SALIDA NO ESTA CORRECTAMENTE INGRESADO '});
            }

            try {
              if (this.ejercicio.explicacion_problema === undefined){
                console.log('indefinido explicacion_problema')
                this.alerts.push({type: 'danger',msg: 'EXPLICACION PROBLEMA NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.explicacion_problema)
            }catch(err){
              error = false
              console.log('explicacion_problema indefinido')
              this.alerts.push({type: 'danger',msg: 'EXPLICACION PROBLEMA NO ESTA CORRECTAMENTE INGRESADO '});
            }

            try {
              if (this.ejercicio.dificultad == 0 || this.ejercicio.dificultad === undefined){
                console.log('indefinido dificultad')
                this.alerts.push({type: 'danger',msg: 'DIFICULTAD NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.dificultad)
            }catch(err){
              error = false
              console.log('dificultad indefinido')
              this.alerts.push({type: 'danger',msg: 'DIFICULTAD NO ESTA CORRECTAMENTE INGRESADO '});
            }

            try {
              if (this.ejercicio.tags.length == 0 || this.ejercicio.tags === undefined){
                console.log('tags dificultad')
                this.alerts.push({type: 'danger',msg: 'TAGS NO ESTA CORRECTAMENTE INGRESADO '});
                error = false
              }
              console.log(this.ejercicio.tags)
            }catch(err){
              error = false
              console.log('tags indefinido')
              this.alerts.push({type: 'danger',msg: 'TAGS NO ESTA CORRECTAMENTE INGRESADO '});
            }

            console.log(error)
            if (this.alert_terminado.length != 0){
              this.alert_terminado = []
            }
            console.log(this.ejercicio.dificultad)
            if (error) {
              console.log(this.ejercicio.tags)
              this.ejercicio.tags = []
              this.ejercicio.dificultad = ''
              this.ejercicio.titulo = ''
              this.ejercicio.explicacion_problema = ''
              this.ejercicio.declaracion_problema = ''
              this.ejercicio.notas = ''
              this.ejercicio.formato_de_entrada = ''
              this.ejercicio.constrains = ''
              this.ejercicio.salida = ''
              this.ejercicio.ejemplo_entrada = ''
              this.ejercicio.ejemplo_salida = ''
                form.$setPristine();
                form.$setUntouched();
                this.ejercicio = {}
                console.log(this.ejercicio)
                console.log('exito')
                $anchorScroll();

                this.alert_terminado.push({type: 'success', msg: 'REGISTRO COMPLETADO'});
                /*
                $route.reload()*/

            }

            if(!error) {

              $anchorScroll();
            }
          }

          this.reset = function(form) {
            if(form) {
              form.$setPristine();
              form.$setUntouched();
            }
            this.ejercicio = {}
          }
    }]
  }).directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }

          if (INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            return true;
          }

          // it is invalid
          return false;
        };
      }
    };
  });
