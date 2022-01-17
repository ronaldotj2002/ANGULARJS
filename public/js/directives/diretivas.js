angular.module('diretivas', []).directive('cardFotos', function() {

    var ddo = {}

    ddo.restric = "AE";

    ddo.scope = {
        titulo: '@'
    }

    ddo.transclude = true;

    ddo.template =     
        '<div class="card shadow bg-body rounded card-alinhamento" style="width: 18rem;" ng-transclude>' +
        '   <div class="card-body">' +
        '   </div>' +
        '</div>'  

    return ddo;
});