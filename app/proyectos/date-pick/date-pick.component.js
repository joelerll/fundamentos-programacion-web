angular.module('datePick').
  component('datePick', {
    templateUrl: './date-pick/date-pick.template.html',
    controller: [function DatePickController() {
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
    }]
  })
