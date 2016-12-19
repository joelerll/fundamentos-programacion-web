angular.module('proyectosApp').component('profesores', {
  bindings: { profesores: '<' },
  template: `
  <div class="contenedor">
  <div class='profesores row'>
    <div ng-repeat='profesor in $ctrl.profesores' >
      <div ng-if='profesor.correo.length == 1' class='col-lg-3 col-md-4 col-xs-6 profesor center-block'>
        <div class='panel panel-default'>
          <div class='panel-body'>
            <img  class="img-responsive center" id='foto-profesor' ng-src="{{profesor.img}}" alt="">
          </div>
          <div class='panel-footer'>
            <a href="#!/profesor/{{profesor.correo[0]}}" class='nombre'>{{profesor.nombre}}</a>
          </div>
        </div>
      </div >
      <div ng-if='profesor.correo.length == 2' class='col-lg-3 col-md-4 col-xs-6 profesor center-block'>
        <div class='panel panel-default'>
          <div  class='panel-body'>
            <img  class="img-responsive center" id='foto-profesor' ng-src="{{profesor.img}}" alt="">
          </div>
          <div class='panel-footer'>
            <a href="#!/profesor/{{profesor.correo[1]}} " class='nombre'>{{profesor.nombre}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  `,
  controller: function() {
  }
})
