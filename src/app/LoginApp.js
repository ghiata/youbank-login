angular
    .module('youbank-login', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/login/login.html'
            });
    });
