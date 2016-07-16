app.config([
  '$routeProvider', function ($routeProvider) {
    $routeProvider.when("/record:id",
    {
        templateUrl: "",
        controller: "datarecordController"
    });
}]);
