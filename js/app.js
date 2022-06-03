const quizApp = angular.module("quizApp", ["ngRoute"]);

quizApp.config([
  "$routeProvider",
  ($routeProvider) => {
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
      })
      .when("/about", {
        templateUrl: "views/about.html",
      })
      .when("/quiz/javascript", {
        templateUrl: "views/quizzes/javascript.html",
        controller: "javascriptController",
      })
      .when("/quiz/angular", {
        templateUrl: "views/quizzes/javascript.html",
        controller: "angularController",
      })
      .when("/quiz/python", {
        templateUrl: "views/quizzes/javascript.html",
        controller: "pythonController",
      })
      .when("/quiz/django", {
        templateUrl: "views/quizzes/javascript.html",
        controller: "djangoController",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);

quizApp.controller("javascriptController", ($scope) => {});
