alertsApp.controller("allAlertsCtrl", function ($scope, alerts,activeUser,alerts) {
    if (alerts.getAll().length === 0) {
       $scope.alertArr=[];
       $http.get(activeUser.get().contractSource).then(function(response) {
            alerts.load(response.data);
            $scope.alertArr = alerts.getAll();
        });
    } else {
        $scope.recipeArr = recipes.getAll();
    }

    }

)