'use strict';

var app = angular.module('someApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { 
     url: '/',
     templateUrl: '/partials/home/home.html', 
     controller: 'homeCtrl' })

  $urlRouterProvider.otherwise('/');
});

// 'use strict';

// var app = angular.module('someApp')


// app.directive('myTable', function(){
//   return {
//     restrict: 'E',
//     scope: {
//       list: '='
//     },
//     controller: 'myTableCtrl',
//     templateUrl: 'partials/home/home.html'
//   };
// });

// app.controller('homeCtrl', function($scope){
//   console.log('myTable ctrl');
//   $scope.sort = function(){
//     console.log('sort!');
//   };
// });

// app.filter('titlecase', function(){
//   return function(input){
//     if(typeof input !== 'string') return input;
//     return input[0].toUpperCase() + input.slice(1).toLowerCase();
//   };
// });

app.controller('homeCtrl', function($scope,$sessionStorage) {
  console.log('homeCtrl');
  $http.get('/users')
  .then(function(res) {
    console.log('res.data:',res.data);
    $scope.users = res.data;
  }, function(err) {
    console.log('error:',err);
  });
  //add a new task to mongo DB
  $scope.addUser = function() {
    var user = {
      user: $scope.user,
      date: $scope.date,
      complete: 0
    };
    $http.post('/users', users)
    .then(function(res) {
      console.log('response:',res);
    }, function(err) {
      console.log('error:',err);
    });
  }






