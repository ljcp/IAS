app.controller('ModalCtrl', function ($scope, $uibModal, $log) {
   
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
    
  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, $http) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };


  $scope.submit = function () {

    if (!$scope.quoteForm.$valid) {
      return;
    }


    var data = {
      name: $scope.name,
      email: $scope.email,
      phone: $scope.phone,
      cname: $scope.cname,
      ventilation: $scope.ventilation,
      fans: $scope.fans,
      dust: $scope.dust,
      conveying: $scope.conveying,
      pollution: $scope.pollution,
      bags: $scope.bags,
      nfpa: $scope.nfpa,
      other: $scope.other,
      msg: $scope.msg

    }


    $http({method : 'POST' ,
      url : 'assets/php/form.php' ,
      data : data,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).success(
        function(data) {

          //Check the result set from form.php file.
          if(data === "sent"){

            //If the email is sent successfully, remove the submit button
            $('#submit-area').remove();
            //Display the success message
            $('#success').fadeIn(500);

            return;
          }

          //Display the error message
          $('#fail').fadeIn(500);
          // Enable the submit button again
          $('#submit').removeAttr('disabled').attr('value', 'Retry');

        }
    );


  }

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});