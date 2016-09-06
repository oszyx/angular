'use strict';

app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
        $scope.authError = null;
        $scope.users = {'userName':'Shukla', 'password':'Hyderbad','email':'ajitesh101@gmail.com'};
        //$http.post('http://localhost:8080/FrameService/api/user/add', $scope.users)
        //    .success(function(response,header,config,status){
        //        console.info("Saved:1");
        //         $state.go('access.content');
        //    }).error(function(response,header,config,status){
        //    console.info("Error:-1.");
        //});
        //$http.get('http://localhost:8080/FrameService/api/user/get/123', {'Content-Type':'application/x-www-form-urlencoded'})
        //    .success(function(response,header,config,status){
        //        console.info("Saved:1");
        //    }).error(function(response,header,config,status){
        //    console.info("Error:-1.");
        //});

        $state.go('access.content');
    };
    $scope.reset = function() {
        $scope.user = {};
    };
  }])
;