function hw(){return"Hello World"}function firebaseConn(){var firebaseRef=new Firebase("https://color-consolidator.firebaseio.com/");firebaseRef.child(".info/connected").on("value",function(connectedSnap){connectedSnap.val()===!0?console.log("we're connected to Firebase!"):console.log("we're disconnected from Firebase!")})}var myAppModule=angular.module("ccApp",["ngRoute","firebase"]).value("fbURL","https://color-consolidator.firebaseio.com/").factory("ccColors",function($firebase,fbURL){return $firebase(new Firebase(fbURL))});myAppModule.config(function($routeProvider){$routeProvider.when("/",{controller:"ListCtrl",templateUrl:"list.html"}).when("/edit/:itemId",{controller:"EditCtrl",templateUrl:"detail.html"}).when("/new",{controller:"CreateCtrl",templateUrl:"detail.html"}).otherwise({redirectTo:"/"})}),myAppModule.controller("ListCtrl",function($scope,ccColors){firebaseConn(),$scope.colors=ccColors,$scope.sort={column:"",descending:!1},$scope.selectedCl=function(column){return column==$scope.sort.column&&"sort-"+$scope.sort.descending},$scope.changeSorting=function(column){var sort=$scope.sort;sort.column==column?sort.descending=!sort.descending:(sort.column=column,sort.descending=!1)}}),myAppModule.controller("CreateCtrl",function($scope,$location,$timeout,ccColors){firebaseConn(),$scope.save=function(){ccColors.$add($scope.ccApp,function(){$timeout(function(){$location.path("/")})})}}),myAppModule.controller("EditCtrl",function($scope,$location,$routeParams,$firebase,fbURL){firebaseConn();var itemUrl=fbURL+$routeParams.itemId;$scope.ccApp=$firebase(new Firebase(itemUrl)),$scope.destroy=function(){$scope.ccApp.$remove(),$location.path("/")},$scope.save=function(){$scope.ccApp.$save(),$location.path("/")}});var d=new Date,epoch=d.getTime()/1e3;WebFontConfig={custom:{families:["DobraMedium","DobraSlabMedium"],urls:["/src/css/fonts.css?epoch="+Math.floor(epoch)]}},function(){var wf=document.createElement("script");wf.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",wf.type="text/javascript",wf.async="true";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(wf,s)}();