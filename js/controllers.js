fitsApp.controller('fitsController', ['$rootScope', '$scope', '$filter', '$timeout', '$log', 'getStuff', function($rootScope, $scope, $filter, $timeout, $log, getStuff) {
  $scope.downloadedICS=false;
  $scope.lookUpPerson = function(instructorInput){
    getStuff.getGenericStuff('data/' + instructorInput + '.json').then(function(personData) {
      $log.warn(personData.data.getMyClsScheduleResponse.RegisteredClasses);
      $scope.classList = personData.data.getMyClsScheduleResponse.RegisteredClasses;
    });
  };
  $scope.downloadICS = function(instructorInput){
    // may need to change this url!
    getStuff.getGenericStuff('dir_where_ics_can_be_found/' + instructorInput + '.ics').then(function(ics) {
      $scope.downloadedICS = true;
      $scope.ICS = ics.data;
    });
  };
}]);
