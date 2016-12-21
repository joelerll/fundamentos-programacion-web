angular.module('nuevoProyecto').
  component('nuevoProyecto', {
    templateUrl: './nuevo-proyecto/nuevo-proyecto.template.html',
    controller: ['$log','Upload','$timeout',function NuevoProyectoController($log,Upload, $timeout) {
			this.titulo = ''
			this.descripcion = ''
      this.tags = []

      this.htmlContent = ''

      /*---------------------------------------------------------------------------------*/
      this.today = function() {
        this.dt = new Date();
      };
      this.today();

      this.clear = function() {
        this.dt = null;
      };

      this.options = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
      };

      // Disable weekend selection
      function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      }

      this.toggleMin = function() {
        this.options.minDate =  new Date();
      };

      this.toggleMin();
      this.setDate = function(year, month, day) {
        var d = new Date();
        this.dt = new Date(d.getFullYear(), d.getDay(), d.getMonth());
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date(tomorrow);
      afterTomorrow.setDate(tomorrow.getDate() + 1);


      function getDayClass(data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);
          this.events = [
            {
              date: tomorrow,
              status: 'full'
            },
            {
              date: afterTomorrow,
              status: 'partially'
            }
          ];
          for (var i = 0; i < this.events.length; i++) {
            var currentDay = new Date(this.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
              return this.events[i].status;
            }
          }
        }

        return '';
      }

      this.tiempo_proyecto = function () {
        var e = new Date();
        var hoy =  new Date(e.getFullYear(), e.getMonth(),e.getDay());
        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24

        // Convert both dates to milliseconds
        console.log(e)
        var date1_ms = e.getTime()
        var date2_ms = this.dt.getTime()
        console.log(hoy)
        console.log(this.dt)
        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms)

        // Convert back to days and return
        this.tiempo_proyecto = Math.round(difference_ms/ONE_DAY)
      }
      this.tiempo_proyecto()
      /*---------------------------------------------------------------------------------*/

      /*----------------------------------------------------------------------------------*/
      this.mytime = new Date();

      this.hstep = 1;
      this.mstep = 15;

      this.ismeridian = true;
      this.toggleMode = function() {
        this.ismeridian = ! this.ismeridian;
      };

      this.update = function() {
        var d = new Date();
        d.setHours( 23 );
        d.setMinutes( 59 );
        this.mytime = d;
      };

      this.changed = function () {
        $log.log('Time changed to: ' + this.mytime);
      };

      this.clear_time = function() {
        this.mytime = null;
      };

      /*<--------MI ARCHIVO</-------------------------------------------------------------*/
      this.mi_archivo = undefined
      this.mostrarPick = function() {
        console.log(this.mi_archivo)
      }
      this.uploadPic = function(file) {
        this.mi_archivo = file
        console.log(this.mi_archivo)
     }
      /*----------------------------------------------------------------------------*/



      /*---------------------------------------------------------------------------------*/
      this.alerts = [
       ];
       this.closeAlert = function(index) {
         this.alerts.splice(index, 1);
       };
      this.submit = function() {
        var contador = 0
        if (this.alerts.length != 0) {
          this.alerts = []
        }
        if(this.htmlContent == ''){
          this.alerts.push({type: 'danger',msg: 'NO INGRESO DESCRIPCION'})

        } else {
          contador = contador + 1
        }
        if (this.dt === null){
          this.alerts.push({type: 'danger',msg: 'NO INGRESO FECHA'})

        } else {
          contador = contador + 1
        }
        if (this.mytime === null){
          this.alerts.push({type: 'danger',msg: 'NO INGRESO HORA ENTREGA'})

        } else {
          contador = contador + 1
        }
        if(this.titulo == '') {
          this.alerts.push({type: 'danger',msg: 'NO INGRESO TITULO'})

        } else {
          contador = contador + 1
        }
        if (this.tags.length == 0) {
          this.alerts.push({type: 'danger',msg: 'NO INGRESO TAGS'})

        } else {
          contador = contador + 1
        }
        console.log(contador)
        if (contador == 5) {
          this.alerts.push({type: 'success',msg: 'PROYECTO CREADO'})
        }
      }

      this.borrar_alertas = function() {
        this.alerts = []
      }

    }]
  })
