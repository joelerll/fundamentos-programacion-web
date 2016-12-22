angular.module('App', ['ngAnimate','diapoMostar','vtortola.ng-terminal','ui.codemirror']).
  controller('ActividadesClasesController', function($scope, $http) {
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
  $http.get('./json/actividades_clase.json')
       .then(function(res){
          $scope.clases = res.data.actividades
        })
  }).
  controller('ClaseTemaController', ['$scope', '$compile','$http', function($scope, $compile,$http) {
    $scope.estado = false;
    if ($scope.estado == false) {
      $http.get('./json/actividades_clase.json')
           .then(function(res){
               res.data.actividades.forEach(function(semana){
                 semana.clases.forEach(function(clase) {
                   if (clase.id == '1.1'){
                       $scope.clase_escogida = clase
                       $scope.inicio = false
                       console.log(clase.id + clase.descripcion)
                       $scope.templateURL = './templates/nav_clase.html';
                   }
                 })
               })
            })
    }
    /*
    $scope.showdiv = function(event) {
      id_clase = $(event.target).attr("id-clase")
      console.log(id_clase);
    }*/
    $scope.inicio = true
    console.log($scope.clase_escogida)
    $scope.showdiv =  function(event){
      $scope.inicio = false
      $('.titulo-escogida').animateCss('bounceInDown');
      id_clase = $(event.target).attr("id-clase")
      $scope.estado = true;
       $http.get('./json/actividades_clase.json')
            .then(function(res){
                res.data.actividades.forEach(function(semana){
                  semana.clases.forEach(function(clase) {
                    if (clase.id == id_clase){
                        $scope.clase_escogida = clase
                        $scope.inicio = false
                        console.log(clase.id + clase.descripcion)
                        $scope.templateURL = './templates/nav_clase.html';
                    }
                  })
                })
             })
       };
  }]).
  controller('ContenidoClaseController', function ContenidoClaseController() {
    this.hero = {
      name: 'Spawn'
    }
  }).
  controller('ClaseMenuController', function() {

  }).
  controller('ctrl', function($scope,$http) {
    var cl
    $http.get('./json/actividades_clase.json')
         .then(function(res){
            cl = res.data.actividades
            console.log(cl[0])
            $scope.rightItem = {color: cl[0].semana};
            $scope.leftItem = {color: cl[1].semana};
          })
  }).
  config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});
