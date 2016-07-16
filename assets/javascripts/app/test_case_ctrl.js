app.controller('dataController', function($scope, dataService){

  getAllRecords();

  function getAllRecords(){
    var data = dataService.getData();
    data.then(function (res){
      $scope.allRecords = res.data["users"];
    });
  }
});

app.controller('datarecordController', function($scope, $routeParams, dataService){
  getrecord($routeParams.id);
  function getrecord(id){
    var data = dataService.get(id);
    data.then(function (res){
      $scope.recorddata = res.data;
    });
  };
});