var InfosysApp = angular.module('InfosysApp', ['myController',"ngRoute"]);

//Include Routing Logic here
InfosysApp.config(function($routeProvider) {
        $routeProvider
        .when('/afterlogin', {
            templateUrl: 'partials/afterlogin.html',
			controller: 'projectsController'
        })
        .when('/', {
            templateUrl: 'partials/login.html',
			controller: 'loginController'
        })
        .when('/projects', {
            templateUrl: 'partials/projects.html',
            controller: 'projectsController'
        })
        .when('/inputs', {
            templateUrl: 'partials/inputs.html',
            controller: 'inputsController'
        })
        .when('/outputs', {
            templateUrl: 'partials/outputs.html',
			controller:'outputsController'
        })
        // .when('/policy', {
        //     templateUrl: 'partials/policy.html',
		// 	controller:'policyController'
        // }).
        // otherwise({
        //     redirectTo: '/'
        // });
    });