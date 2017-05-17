function OrderFormController($scope){

  // Define the model properties. The view will loop
  // through the services array and generate a li
  // element for every one of its items.

  $scope.input = false;

  $scope.services = [
    {
      name: 'Web Development',
      price: 300,
      active:false
    },{
      name: 'Design',
      price: 400,
      active:false
    },{
      name: 'Integration',
      price: 250,
      active:false
    },{
      name: 'Training',
      price: 220,
      active:false
    }
  ];

  $scope.toggleActive = function(s){
    s.active = !s.active;
  };

  // Constructor to create new services
  function Service(name, price) {
      this.name = name;
      this.price = price;
      this.active = true;
  };

  $scope.remove = (evt) => {
      $scope.services.splice(evt.$index, 1);
  };

  // Adds a new Service
  $scope.addService = () => {
      var newService = new Service($scope.name, $scope.price);
      $scope.services.push(newService);
      $scope.input = false;
      $scope.name = null;
      $scope.price = null;
  };

  // Helper method for calculating the total price

  $scope.total = function(){

    var total = 0;

    // Use the angular forEach helper method to
    // loop through the services array:

    angular.forEach($scope.services, function(s){
      if (s.active){
        total+= s.price;
      }
    });

    return total;
  };
}

angular.module('app', []).controller('OrderFormController', OrderFormController);
