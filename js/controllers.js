fitsApp.controller('fitsController', ['$rootScope', '$scope', '$filter', '$timeout', '$log', 'getStuff', function($rootScope, $scope, $filter, $timeout, $log, getStuff) {
  $scope.lookUpPerson = function(instructorInput){
    getStuff.getGenericStuff('data/' + instructorInput + '.json').then(function(personData) {
      $log.warn(personData.data.getMyClsScheduleResponse.RegisteredClasses);
      $scope.classList = personData.data.getMyClsScheduleResponse.RegisteredClasses;
    });
  };
}]);
