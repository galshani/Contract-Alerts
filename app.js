var alertsApp = angular.module("AlertsApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

alertsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "",
            controller: "HomeCtrl"
        })
        .when("/upcoming Alerts", {
            templateUrl: "appstuff view/upcomingAlerts.html",
            controller: "upcomingAlertsCtrl"
        })
        .when("/all Alerts", {
            templateUrl: "appstuff view/allAlerts.html",
            controller: "allAlertsCtrl"
        })
        .when("/createNewAlert", {
            templateUrl: "appstuff view/createNewAlert.html",
            controller: "createNewAlertCtrl"
        })