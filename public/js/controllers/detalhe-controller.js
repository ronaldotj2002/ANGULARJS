angular.module('fotosMarvel').controller('DetalheController', function($scope, $http, $routeParams) {

    $scope.detalhe          = [];
    $scope.quadrinhos       = [];
    $scope.listaQuadrinhos  = [];
    $scope.detalheQuadrinho = [];
    
    var URL        = 'https://gateway.marvel.com:443/';
    var apikey     = '9603d281854fcd18b9a6b4b35b8992f3';
    var hash       = '1beba9a82116b18ec774343b7b0312be'; 

    if($routeParams.fotoId) {
        var promisse   = $http.get(URL + `/v1/public/characters/${$routeParams.fotoId}?ts=1&apikey=${apikey}&hash=${hash}`)        
        promisse.then(function (response) {
            $scope.detalhe = response.data;
            $scope.dados = [];
            if($scope.detalhe) {
                $scope.dados = $scope.detalhe.data.results[0].comics.items.map(function (valor) {
                    // erro CORS
                    return valor.resourceURI.replace('http', 'https') + `?ts=1&apikey=${apikey}&hash=${hash}`
                })               
              
                for(var i = 0; i < $scope.dados.length; i++) {
                    var promisse = $http.get($scope.dados[i])
                    promisse.then(function (res) {
                        $scope.listaQuadrinhos.push(res.data.data.results[0]);                       
                    })
                }
                console.log("lista", $scope.listaQuadrinhos)
            }
            
        }).catch(function (error) {
            console.log(error);
        })
        
    }

    $scope.carregarInfo = function (dados) {
        $scope.detalheQuadrinho = dados;
    } 

});