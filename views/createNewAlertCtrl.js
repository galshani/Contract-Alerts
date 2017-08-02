alertsApp.controller("createNewAlertCtrl", function ($scope,$http) {
    $scope.test = "TESTTTT";

$http.get("categories.json").then(function(response) {
    $scope.categories = [];
    $scope.newAlert = {};
    for (var i = 0; i < response.data.length; i++) {
      $scope.categories.push(new Category(response.data[i]));
    }
})
  });