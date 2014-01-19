// jasmine's first test
function hw() {
    return 'Hello World';
}

// check connection status to Firebase
function firebaseConn() {
    var firebaseRef = new Firebase('https://color-consolidator.firebaseio.com/');
    firebaseRef.child('.info/connected').on('value', function(connectedSnap) {
        if (connectedSnap.val() === true) {
            console.log("we're connected to Firebase!");
        } else {
            console.log("we're disconnected from Firebase!");
        }
    });
}

// the app!
var myAppModule = angular.module('ccApp', ['ngRoute', 'firebase'])

.value('fbURL', 'https://color-consolidator.firebaseio.com/')

.factory('ccColors', function($firebase, fbURL) {
    return $firebase(new Firebase(fbURL));
});

myAppModule.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller:'ListCtrl',
        templateUrl:'list.html'
    })
    .when('/edit/:itemId', {
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

myAppModule.controller('ListCtrl', function($scope, ccColors) {
    firebaseConn();
    $scope.colors = ccColors;
    // make columns sortable
    $scope.sort = {
        column: 'colorFamily',
        descending: false
    };
    $scope.selectedCl = function(column) {
        return column == $scope.sort.column && 'sort-' + $scope.sort.descending;
    };
    $scope.changeSorting = function(column) {
        var sort = $scope.sort;
        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };
});

myAppModule.controller('CreateCtrl', function($scope, $location, $timeout, ccColors) {
    firebaseConn();
    $scope.save = function() {
        ccColors.$add($scope.ccApp, function() {
            $timeout(function() { $location.path('/'); });
        });
    };
});

myAppModule.controller('EditCtrl', function($scope, $location, $routeParams, $firebase, fbURL) {
    firebaseConn();
    var itemUrl = fbURL + $routeParams.itemId;
    $scope.ccApp = $firebase(new Firebase(itemUrl));
    $scope.destroy = function() {
        $scope.ccApp.$remove();
        $location.path('/');
    };
    $scope.save = function() {
        $scope.ccApp.$save();
        $location.path('/');
    };
});
