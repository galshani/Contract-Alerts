var alertsApp = angular.module("AlertsApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

alertsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/createNewAlert.html",
            controller: "createNewAlertCtrl"
        })
        .otherwise({redirectTo:'/'});
        
        // .when("/upcoming Alerts", {
        //     templateUrl: "views/upcomingAlerts.html",
        //     controller: "upcomingAlertsCtrl"
        // })
        // .when("/all Alerts", {
        //     templateUrl: "views/allAlerts.html",
        //     controller: "allAlertsCtrl"
        // })
        // .when("/createNewAlert", {
        //     templateUrl: "views/createNewAlert.html",
        //     controller: "createNewAlertCtrl"
        // });
});