alertsApp.controller("allAlertsCtrl", function ($scope, alerts, activeUser, $http, $location) {
    if (alerts.getAll().length === 0) {
        $scope.alertArr = [];
        $http.get(activeUser.get().contractSource).then(function (response) {
            alerts.load(response.data);
            $scope.alertArr = alerts.getAll();
            console.log($scope.alertArr);
        });
    } else {
        $scope.alertArr = alerts.getAll();
    }

    $scope.deleteItems = function () {
        for (var i = 0; i < $scope.alertArr.length; i++) {
            if ($scope.alertArr[i].isChecked) {
                alerts.remove(i);
            }
            alertArr = alerts.getAll();
        }
    }
    $scope.mouseOverUpdate = function() {
    alert("You can only update one document at a time!");
}
    // to do- when update can create new using modal 
    $scope.updateItem = function (index) {
        $location.path("/alerts/" + index)
        // to do-make alert that only one document can be updated at a time
    }
    alertArr = alerts.getAll();

})
    
    



