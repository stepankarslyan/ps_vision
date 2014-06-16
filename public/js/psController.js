angular.module("MyApp").
  controller("PsController", function($scope) {
  
  $scope.processes = [];

  $.ajax({
    url: "/processes",
    method: "GET",
    
    success: function(data) {
      $scope.processes = JSON.parse(data);
      $scope.$apply();
    }
    
  });
  
  $scope.kill = function(proc) {
    
    $.ajax({
      url: "/processes/" + proc.pid,
      method: "DELETE",
      
      success: function(data) { 
        toastr.success(data ,"Ok");
      }, 
      
      error: function(error) {
        toastr.error(error ,"Error");
      }
      
    });
    
    $scope.processes = _.without($scope.processes, proc);
  };
    
});
