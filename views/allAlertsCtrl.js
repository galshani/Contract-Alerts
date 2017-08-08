alertsApp.controller("allAlertsCtrl", function ($scope, alerts,activeUser, $http) {

    $scope.deleteItems = function () {
        for(var i=0;i<$scope.alertArr.length;i++) {
            if($scope.alertArr[i].isChecked) {
                alerts.remove(i);
            }
            alertArr = alerts.getAll();
        }
    }

    if (alerts.getAll().length === 0) {
       $scope.alertArr=[];
       $http.get(activeUser.get().contractSource).then(function(response) {
            alerts.load(response.data);
            $scope.alertArr = alerts.getAll();
            console.log($scope.alertArr);
        });
    } else {
        $scope.alertArr = alerts.getAll();
    }

    }

)