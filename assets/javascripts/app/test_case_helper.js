app.service ('dataService', function($http){
  this.getData = function(){
    // return $http.get(url, {
    //           headers: {'X-Redmine-API-Key': 'ee1970dcaae72cc90e12ad75b6401b73ffa83401'}
    //         });
    return $http.get(url);
  };

  this.get = function(name){
    return $http.get(url + '/' + name );
  };

  this.post = function(obj){
    var req = $http({
      method: 'POST',
      url:    url,
      data:   obj
    });

    return req;
  };
});