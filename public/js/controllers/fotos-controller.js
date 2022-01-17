angular.module('fotosMarvel').controller('FotosController', function($scope, $http) {
    $scope.fotos   = [];
    $scope.filtro  = '';
    
    var URL      = 'https://gateway.marvel.com:443/';
    var apikey   = '9603d281854fcd18b9a6b4b35b8992f3';
    var hash     = '1beba9a82116b18ec774343b7b0312be';          
   
    var promisse = $http.get(URL + `/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`);

    promisse.then(function (response) {
        $scope.fotos = response.data;
    }).catch(function (error) {
        console.log(error);
    });

});