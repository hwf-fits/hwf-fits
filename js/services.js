fitsApp.factory('getStuff', function ($http, $rootScope, $log) {
  return {
    getGenericStuff: function (url) {
      return $http.get(url).then(
        function success(result) {
          return result;
        },
        function error(result) {
          $log.warn(url, result.status, result.data.errors);
          return result;
        }
      );
    },
  };
});
