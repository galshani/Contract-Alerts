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
//recipeApp.controller("NewRecipeCtrl", function ($scope, $location, recipes, activeUser, Recipe) {

    // If the user is not logged in going back to home screen
    //if (!activeUser.isLoggedIn()) {
    //    $location.path("/");
    //    return;
   // }

  //  $scope.recipe = new Recipe({});

   // $scope.cancel = function () {
   //     $location.path("/recipes");
  //  }

  //  $scope.create = function () {
  //      recipes.add($scope.recipe);
  //      $location.path("/recipes");
  //  }
//});