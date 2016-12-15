angular.
  module('sandboxApp').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider,$routeProvider) {
      $locationProvider.hashPrefix('!')

      $routeProvider.
        when('/',{
          template: '<ejercicios-lista></ejercicios-lista>',
          css: ['/bootstrap-select.css']
        }).
        when('/:ejercicioId', {
          template: '<ejercicio-detalle></ejercicio-detalle>',
          css: ['/:ejercicioId/bootstrap-select.css']
        }).
        otherwise('/')
    }
  ])
