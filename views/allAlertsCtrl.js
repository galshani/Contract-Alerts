alertsApp.controller("allAlertsCtrl", function ($scope, alerts) {
    if (alerts.getAll().length === 0) {
       $scope.alertArr=[];
       $http.get(activeUser.get())
    }

})