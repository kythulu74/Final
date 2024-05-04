angular.module('itemApp', [])
  .controller('WelcomeController', function($scope, $http) {
    
	$http.get('http://ec2-3-144-47-72.us-east-2.compute.amazonaws.com:8090/item/welcome')
  .then(function(response) {
	console.log("i made a call");
    $scope.welcomeMessage = response.data.message;
  })
  .catch(function(error) {
    $scope.errorMessage = "Failed to fetch welcome message.";
    console.error('Error fetching welcome message:', error);
  });

  
  $http.get('http://localhost:8090/item/all')
  .then(function(response) {
    $scope.items = response.data;
  })
  .catch(function(error) {
    $scope.errorMessage = "Failed to fetch items.";
    console.error('Error fetching welcome message:', error);
  });

  $scope.addItem = function() {
	var newItem = {
		parentOrin: $scope.parentOrin,
		gtin: $scope.gtin,
		longDesc: $scope.longDesc,
		shortDesc: $scope.shortDesc,
		vpn: $scope.vpn,
		supplier: $scope.supplier,
		brand: $scope.brand,
		color: $scope.color,
		size: $scope.size,
		team: $scope.team,
		retail: $scope.retail,
		unitCost: $scope.unitCost
		
	};

	$http.post('http://localhost:8090/item/add', newItem)
		.then(function(response) {
			
			console.log('Item added successfully:', response.data);
			
		})
		.catch(function(error) {
			// Handle error
			console.error('Error adding item:', error);
			
		});
};
 
	
});

