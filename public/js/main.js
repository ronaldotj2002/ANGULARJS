angular.module('fotosMarvel', ['diretivas', 'ngAnimate', 'ngRoute', 'servicos'])
.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider.when('/fotos', {
        templateUrl: 'pages/principal.html',
        controller: 'FotosController'
    });
    
    $routeProvider.when('/fotos/detalhe/:fotoId', {
        templateUrl: 'pages/detalhe.html',
        controller: 'DetalheController'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});
});