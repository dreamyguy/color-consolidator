// jasmine's first test
function hw() {
    return 'Hello World';
}

// the app!
var myAppModule = angular.module('project', ['ngRoute', 'firebase'])

.value('fbURL', 'https://color-consolidator.firebaseio.com')

.factory('Projects', function($firebase, fbURL) {
    return $firebase(new Firebase(fbURL));
});

myAppModule.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller:'ListCtrl',
        templateUrl:'list.html'
    })
    .when('/edit/:projectId', {
        controller:'EditCtrl',
        templateUrl:'detail.html'
    })
    .when('/new', {
        controller:'CreateCtrl',
        templateUrl:'detail.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});

myAppModule.controller('ListCtrl', function($scope, Projects) {
    $scope.projects = Projects;
});

myAppModule.controller('CreateCtrl', function($scope, $location, $timeout, Projects) {
    $scope.save = function() {
        Projects.$add($scope.project, function() {
            $timeout(function() { $location.path('/'); });
        });
    };
});

myAppModule.controller('EditCtrl', function($scope, $location, $routeParams, $firebase, fbURL) {
    var projectUrl = fbURL + $routeParams.projectId;
    $scope.project = $firebase(new Firebase(projectUrl));
    $scope.destroy = function() {
        $scope.project.$remove();
        $location.path('/');
    };
    $scope.save = function() {
        $scope.project.$save();
        $location.path('/');
    };
});
