angular.module('youbank-login').controller('LoginCtrl', function($scope, $http, $rootScope, $location) {

    console.log('login controller');
    $scope.doLogin= function() {
        $scope.loading = true;
        $scope.wronguserpass = false;
        $scope.loginserviceerror = false;

        console.log($scope.login);

        var loginData= {
            Login: $scope.login
        };

        $http.post(config.login.url , loginData).
            success(function(data, status, headers, config) {
                console.log(data);

                $scope.loading = false;

                if (typeof data.UserNotFound !== 'undefined' && data.UserNotFound === 'Invalid Account Number or Password') {
                    $scope.wronguserpass = true;
                } else {
                    $scope.user = data;
                    $location.path( '/wizard' );
                    $rootScope.user = data;
                }
            }).
            error(function(data, status, headers, config) {
                console.log('an error has occured while GetCustomerInformation', data, status, headers, config);
                $scope.loginserviceerror = true;
                $scope.loading = false;
            });
    };

});
