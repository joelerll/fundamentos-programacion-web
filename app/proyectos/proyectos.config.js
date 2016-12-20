angular.
  module('proyectosApp').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider,$routeProvider) {
      $locationProvider.hashPrefix('!')
      $routeProvider.
        when('/', {
          template: '<presentacion-proyectos></presentacion-proyectos>',
          css: ['/app/proyectos/presentacion-proyectos/css/presentacion-proyectos.css']
        }).
        when('/proyectos', {
          template: '<lista-proyectos></lista-proyectos>',
          css: ['/app/proyectos/lista-proyectos/css/lista-proyectos.css']
        }).
        when('/proyecto/nuevo', {
          template: '<nuevo-proyecto></nuevo-proyecto>',
          css: ['/app/proyectos/nuevo-proyecto/css/nuevo-proyecto.css']
        }).
        otherwise('/')
    }
  ])
