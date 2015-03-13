'use strict';

// Takers controller
angular.module('takers').controller('TakersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Takers','Articles',
	function($scope, $stateParams, $location, Authentication, Takers, Articles ) {
		$scope.authentication = Authentication;

		// Create new Taker
		$scope.create = function() {
			// Create new Taker object
			var taker = new Takers ({
				name: this.name
			});

			// Redirect after save
			taker.$save(function(response) {
				$location.path('takers/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
		};

		// Remove existing Taker
		$scope.remove = function( taker ) {
			if ( taker ) { taker.$remove();

				for (var i in $scope.takers ) {
					if ($scope.takers [i] === taker ) {
						$scope.takers.splice(i, 1);
					}
				}
			} else {
				$scope.taker.$remove(function() {
					$location.path('takers');
				});
			}
		};

		// Update existing Taker
		$scope.update = function() {
			var taker = $scope.taker ;

			taker.$update(function() {
				$location.path('takers/' + taker._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Takers
		$scope.find = function() {
			$scope.takers = Takers.query();
		};

		// Find existing Taker
		$scope.findOne = function() {
			$scope.taker = Takers.get({ 
				takerId: $stateParams.takerId
			});
		};
	}
]);
