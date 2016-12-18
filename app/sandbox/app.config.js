angular.
  module('sandboxApp').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider,$routeProvider) {
      $locationProvider.hashPrefix('!')
      $routeProvider.
        when('/', {
          templateUrl: './index.template.html',
          css: ['/app/sandbox/1_dependencies/css/index.css']
        }).
        when('/ejercicios',{
          template: '<ejercicios-lista></ejercicios-lista>',
          css: ['/app/sandbox/1_dependencies/css/bootstrap.css']
        }).
        when('/ejercicios/:ejercicioId', {
          template: '<ejercicio-detalle></ejercicio-detalle>',
          css: ['/app/sandbox/1_dependencies/css/bootstrap.css','/app/sandbox/ejercicio-detalle/css/ejercicio.css']
        }).
        when('/profesores', {
          template: "<profesor-elegir></profesor-elegir>",
          css: ['/app/sandbox/1_dependencies/css/font-awesome.min.css','/app/sandbox/profesor-elegir/css/profesor-elegir.css','/app/sandbox/1_dependencies/css/bootstrap.css']
        }).
        when('/profesor/:profesorId', {
          template: "<profesor-ejercicios></profesor-ejercicios>",
          css: ['/app/sandbox/profesor-ejercicios/css/sandbox.css','/app/sandbox/1_dependencies/css/font-awesome.min.css']
        }).
        when('/profesor/:profesorId/#tab', {
          template: 'profe tab'
        }).
        when('/profesor/ejercicos/:profesorId', {
          template: '<mis-ejercicios></mis-ejercicios>',
          css: ['/app/sandbox/mis-ejercicios/css/sandbox.css','/app/sandbox/1_dependencies/css/font-awesome.min.css']
        }).
        otherwise('/')
    }
  ])
